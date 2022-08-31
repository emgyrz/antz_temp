
export class BasketCounter {

  constructor( el ) {
    this.el = el
    this.productsIds = []
    this.el.onclick = this.handleClick.bind( this )
  }

  add( id ) {
    if ( this.productsIds.includes( id ) ) return
    this.productsIds.push( id )
    this.update()
  }

  remove( id ) {
    if ( !this.productsIds.includes( id ) ) return
    this.productsIds.splice( this.productsIds.indexOf( id ), 1 )
    this.update()
  }

  update() {
    const size = this.productsIds.length
    this.el.classList.toggle( 'active', size !== 0 )
    this.el.lastElementChild.textContent = size
  }

  handleClick() {
    const isActive = this.el.classList.contains( 'active' )
    const isOnBasketPage = window.location.toString().includes( 'basket.html' )

    if ( isActive && !isOnBasketPage ) {
      const ids = this.productsIds.join( ',' )
      window.location = `/basket.html?ids=${ids}`
    }
  }
}
