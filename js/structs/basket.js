import products from "../data"
import * as tpl from "../templates"

export class Basket {
  constructor( { el, totalSumEl, basketCounter, orderedIds } ) {
    this.items = []
    this.el = el
    this.totalSumEl = totalSumEl
    this.basketCounter = basketCounter
    this.fillItems( orderedIds )
    this.addListeners()
    this.update()
  }

  byId( id ) {
    return this.items.find( ( it ) => it.product.id === id )
  }


  remove( id ) {
    const it = this.byId( id )
    const ind = this.items.indexOf( it )
    if ( ind !== -1 ) {
      this.items.splice( ind, 1 )
      this.basketCounter.remove( id )
      this.update()
    }
  }

  fillItems( orderedIds ) {
    orderedIds.forEach( ( id ) => {
      const product = products.find( ( p ) => p.id === id )
      if ( product !== undefined ) {
        this.items.push( { count: 1, product } )
        this.basketCounter.add( id )
      }
    } )
  }

  changeCount( id, n ) {
    const it = this.byId( id )
    if ( it === undefined ) return

    let newCount = it.count + n
    newCount = newCount < 1 ? 1 : newCount
    newCount = newCount > 10 ? 10 : newCount
    it.count = newCount
    this.update()
  }

  render() {
    let html = ''
    this.items.forEach( ( it ) => {
      const { count, product } = it
      html += tpl.productInBasket( product, count )
    } )
    this.el.innerHTML = html
  }

  addListeners() {
    this.el.onclick = ( ev ) => {
      const trg = ev.target
      if ( trg.tagName.toLowerCase() !== 'button' ) return
      if ( trg.classList.contains( 'closeBtn' ) ) {
        this.remove( parseInt( trg.parentElement.dataset.id, 10 ) )
      } else {
        const id = parseInt( trg.parentElement.parentElement.dataset.id, 10 )
        const type = trg.dataset.type
        this.changeCount( id, type === 'minus' ? -1 : 1 )
      }
    }
  }

  update() {
    this.render()
    this.updateTotalSum()
    if ( this.items.length === 0 ) {
      window.location = '/'
    }
  }
  updateTotalSum() {
    let sum = 0
    this.items.forEach( ( it ) => {
      sum += it.count * it.product.price
    } )
    this.totalSumEl.textContent = `Сумма ${sum.toLocaleString( 'ru' )} ₽`
  }
}
