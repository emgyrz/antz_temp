
export class OrderForm {
  constructor( el ) {
    this.el = el
    const q = ( selector ) => el.querySelector( selector )
    this.name = q( 'input[name="name"]' )
    this.phone = q( 'input[name="phone"]' )
    this.email = q( 'input[name="email"]' )
    this.btn = q( 'button' )
    this.updateBtn()
    this.addListeners()
  }

  isNameValid() {
    return this.name.value.length > 1
  }

  isPhoneValid() {
    return /^\d{6,15}$/.test( this.phone.value )
  }

  isEmailValid() {
    return /\S+@\S+\.\S+/.test( this.email.value )
  }

  isValid() {
    return this.isNameValid() && this.isPhoneValid() && this.isEmailValid()
  }

  addListeners() {
    this.el.onsubmit = this.handleSubmit.bind( this )
    this.el.oninput = this.handleChange.bind( this )
    this.el.addEventListener( "blur", this.handleBlur.bind( this ), true )
  }
  handleSubmit( ev ) {
    ev.preventDefault()
    const data = { name: this.name.value, phone: this.phone.value, email: this.email.value }
    _openPopup( data )
  }
  handleChange( ev ) {
    const trg = ev.target
    if ( trg.name === 'email' && this.isEmailValid() ) {
      this.email.nextElementSibling.style.display = 'none'
    } else if ( trg.name === 'phone' ) {
      trg.value = trg.value.replace( /[^\d.-]/g, '' )
    }
    this.updateBtn()
  }
  handleBlur( ev ) {
    const trg = ev.target
    if ( trg.name === 'email' && !this.isEmailValid() ) {
      this.email.nextElementSibling.style.display = 'block'
    }
  }

  updateBtn() {
    const isValid = this.isValid()
    this.btn.disabled = !isValid
  }
}


function _openPopup( data ) {
  const el = document.getElementById( 'popup' )
  el.classList.add( 'open' )
  const q = ( selector ) => el.querySelector( selector )
  q( '.name' ).textContent = data.name
  q( '.orderNum' ).textContent = '№' + Math.round( Math.random() * 10000 )
  q( '.phone' ).textContent = data.phone
  q( 'button' ).onclick = () => {
    window.location = '/'
  }
}
