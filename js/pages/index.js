import '../../style.scss'
import { BasketCounter } from "../structs/basketCounter"
import { Catalog } from "../structs/catalogue"

_init()

function _init() {
  const catalogElement = document.getElementById( 'catalog' )
  const basketElement = document.getElementById( 'basket' )
  const basketCounter = new BasketCounter( basketElement )

  new Catalog( catalogElement, basketCounter )
}

