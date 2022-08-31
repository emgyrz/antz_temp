import '../../style.scss'
import { BasketCounter } from "../structs/basketCounter"
import { Basket } from "../structs/basket"
import { OrderForm } from "../structs/order"


_init()

function _init() {
  const basketElement = document.getElementById( 'basket' )
  const basketCounter = new BasketCounter( basketElement )
  const basketListEl = document.getElementById( 'basketList' )
  const totalSumEl = document.getElementById( 'totalSum' )

  new Basket( {
    el: basketListEl,
    totalSumEl,
    basketCounter,
    orderedIds: _getIdsFromQuery()
  } )


  const formEl = document.querySelector( 'form' )
  new OrderForm( formEl )

}



function _getIdsFromQuery() {
  return window.location.search
    .replace( '?ids=', '' )
    .split( ',' )
    .map( ( ( id ) => parseInt( id, 10 ) ) )
}
