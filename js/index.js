import '../style.scss'
import {Catalog, BasketCounter} from './catalog.js'

const catalogElement = document.getElementById('catalog')
const basketElement = document.getElementById('basket')
const basketCounter = new BasketCounter(basketElement)

new Catalog(catalogElement, basketCounter)
