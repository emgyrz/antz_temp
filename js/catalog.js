
import products from './data.js'

export class Catalog {
  constructor(el, basketCounter) {
    this.el = el
    this.basketCounter = basketCounter
    this.render()
    this.addListeners()
  }

  render() {
    let html = ''
    products.forEach((product) => {
      html += this.renderProduct(product)
    })
    this.el.innerHTML = html
  }

  renderProduct(product) {
    return `<section class="product" data-id="${product.id}">
<div class="productImg" style="background-image:url('${product.imgSrc}');"></div>
<p class="productName">${product.name}</p>
<p class="productPrice">${product.price.toLocaleString('ru')} ₽</p>
<button>Добавить в корзину</button>
</section>`
  }

  addListeners() {
    this.el.onclick = this.handleClick.bind(this)
  }

  handleClick(ev) {
    const trg = ev.target
    if (trg.tagName.toLowerCase() === 'button') {
      const id = parseInt(trg.parentElement.dataset.id)
      this.basketCounter.add(id)
      trg.classList.add('green')
      trg.textContent = 'В корзине'
    }
  }

}



export class BasketCounter {

  constructor(el) {
    this.el = el
    this.productsIds = []
    this.el.onclick = this.handleClick.bind(this)
  }

  add(id) {
    if (this.productsIds.includes(id)) return
    this.productsIds.push(id)
    this.update()
  }

  remove(id) {
    if (!this.productsIds.includes(id)) return
    this.productsIds.splice(this.productsIds.indexOf(id), 1)
    this.update()
  }

  update() {
    const size = this.productsIds.length
    this.el.classList.toggle( 'active', size !== 0 )
    this.el.lastElementChild.textContent = size
  }

  handleClick() {
    const isActive = this.el.classList.contains('active')
    const isOnBasketPage = window.location.toString().includes('basket.html')

    if (isActive && !isOnBasketPage) {
      const ids = this.productsIds.join(',')
      window.location = `/basket.html?ids=${ids}`
    }
  }
}


export class BasketList {
  constructor(el, totalSumEl, basketCounter, orderedIds) {
    this.items = []
    this.el = el
    this.totalSumEl = totalSumEl
    this.basketCounter = basketCounter
    orderedIds.forEach((id) => {
      const product = products.find((p) => p.id === id)
      if (product !== undefined) {
        this.items.push({count: 1, product })
        this.basketCounter.add(id)
      }
    })
    this.addListeners()
    this.update()
  }

  byId(id) {
    return this.items.find((it) => it.product.id === id)
  }


  remove(id) {
    const it = this.byId(id)
    const ind = this.items.indexOf(it)
    if (ind !== -1) {
      this.items.splice(ind, 1)
      this.basketCounter.remove(id)
      this.update()
    }
  }

  changeCount(id, n) {
    const it = this.byId(id)
    if (it === undefined) return

    let newCount = it.count + n
    newCount = newCount < 1 ? 1 : newCount
    newCount = newCount > 10 ? 10 : newCount
    it.count = newCount
    this.update()
  }

  render() {
    let html = ''
    this.items.forEach((it) => {
      const {count, product} = it
      html += `<section class="productInBasket" data-id="${product.id}">
<div class="productImg" style="background-image:url('${product.imgSrc}');"></div>
<div class="productName">${product.name}</div>
<div class="productCounter"><button data-type="minus"></button>${count}<button data-type="plus"></button></div>
<div class="productPrice">${(product.price * count).toLocaleString('ru')} ₽</div>
<button class="closeBtn"><svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<line y1="-0.5" x2="17.5836" y2="-0.5" transform="matrix(0.729466 0.684017 -0.729466 0.684017 0.133789 0.843262)"/>
<line y1="-0.5" x2="17.5839" y2="-0.5" transform="matrix(-0.729831 0.683627 -0.729831 -0.683628 12.9673 0.135986)"/>
</svg><span>Удалить</span></button>
</section>`
    })
    this.el.innerHTML = html
  }

  addListeners() {
    this.el.onclick = (ev) => {
      const trg = ev.target
      if (trg.tagName.toLowerCase() !== 'button') return
      if (trg.classList.contains('closeBtn')) {
        this.remove(parseInt(trg.parentElement.dataset.id))
      } else {
        const id = parseInt(trg.parentElement.parentElement.dataset.id)
        const type = trg.dataset.type
        this.changeCount(id, type === 'minus' ? -1 : 1)
      }
    }
  }

  update() {
    this.render()
    this.updateTotalSum()
    if (this.items.length === 0) {
      window.location = '/'
    }
  }
  updateTotalSum() {
    let sum = 0
    this.items.forEach((it) => {
      sum += it.count * it.product.price
    })
    this.totalSumEl.textContent = `Сумма ${sum.toLocaleString('ru')} ₽`
  }
}



export class OrderForm {
  constructor(el) {
    this.el = el
    this.name = el.querySelector('input[name="name"]')
    this.phone = el.querySelector('input[name="phone"]')
    this.email = el.querySelector('input[name="email"]')
    this.btn = el.querySelector('button')
    this.updateBtn()
    this.addListeners()
  }

  isNameValid() {
    return this.name.value.length > 1
  }

  isPhoneValid() {
    return /^\d{6,15}$/.test(this.phone.value)
  }

  isEmailValid() {
    return /\S+@\S+\.\S+/.test(this.email.value);
  }

  isValid() {
    return this.isNameValid() && this.isPhoneValid() && this.isEmailValid()
  }

  addListeners() {
    this.el.onsubmit = this.handleSubmit.bind(this)
    this.el.oninput = this.handleChange.bind(this)
    this.el.addEventListener("blur", this.handleBlur.bind(this), true)
  }
  handleSubmit(ev) {
    ev.preventDefault()
    const data = {name: this.name.value, phone: this.phone.value, email: this.email.value }
    openPopup(data)
  }
  handleChange(ev) {
    const trg = ev.target
    if (trg.name === 'email' && this.isEmailValid()) {
      this.email.nextElementSibling.style.display = 'none'
    } else if(trg.name === 'phone') {
      trg.value = trg.value.replace(/[^\d.-]/g, '')
    }
    this.updateBtn()
  }
  handleBlur(ev) {
    const trg = ev.target
    if (trg.name === 'email' && !this.isEmailValid()) {
      this.email.nextElementSibling.style.display = 'block'
    }
  }

  updateBtn() {
    const isValid = this.isValid()
    this.btn.disabled = !isValid
  }
}


function openPopup(data) {
  const el = document.getElementById('popup')
  el.classList.add('open')
  el.querySelector('.name').textContent = data.name
  el.querySelector('.orderNum').textContent = '№' + Math.round(Math.random() * 10000)
  el.querySelector('.phone').textContent = data.phone
  el.querySelector('button').onclick = () => {
    window.location = '/'
  }
}
