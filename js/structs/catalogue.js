import products from "../data"
import * as tpl from "../templates"

export class Catalog {
  constructor( el, basketCounter ) {
    this.el = el
    this.basketCounter = basketCounter
    this.render()
    this.addListeners()
  }

  render() {
    let html = ''
    products.forEach( ( product ) => {
      html += tpl.productInCatalog( product )
    } )
    this.el.innerHTML = html
  }

  addListeners() {
    this.el.onclick = this.handleClick.bind( this )
  }

  handleClick( ev ) {
    const trg = ev.target
    if ( trg.tagName.toLowerCase() === 'button' ) {
      const id = parseInt( trg.parentElement.dataset.id, 10 )
      this.basketCounter.add( id )
      trg.classList.add( 'green' )
      trg.textContent = 'В корзине'
    }
  }
}

