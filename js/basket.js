import '../style.scss'
import {BasketList, BasketCounter, OrderForm} from './catalog.js'

const basketElement = document.getElementById('basket')
const basketCounter = new BasketCounter(basketElement)
const basketListEl = document.getElementById('basketList')
const totalSumEl = document.getElementById('totalSum')

const ids = window.location.search.replace('?ids=', '').split(',').map((id => parseInt(id)))

new BasketList(basketListEl, totalSumEl, basketCounter, ids)


const formEl = document.querySelector('form')
new OrderForm(formEl)
