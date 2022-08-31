/* eslint-disable max-len */
export function productInCatalog( product ) {
  return `<section class="product" data-id="${product.id}">
<div class="productImg" style="background-image:url('${product.imgSrc}');"></div>
<p class="productName">${product.name}</p>
<p class="productPrice">${product.price.toLocaleString( 'ru' )} ₽</p>
<button>Добавить в корзину</button>
</section>`
}


export function productInBasket( product, count ) {
  return `<section class="productInBasket" data-id="${product.id}">
<div class="productImg" style="background-image:url('${product.imgSrc}');"></div>
<div class="productName">${product.name}</div>
<div class="productCounter"><button data-type="minus"></button>${count}<button data-type="plus"></button></div>
<div class="productPrice">${( product.price * count ).toLocaleString( 'ru' )} ₽</div>
<button class="closeBtn"><svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<line y1="-0.5" x2="17.5836" y2="-0.5" transform="matrix(0.729466 0.684017 -0.729466 0.684017 0.133789 0.843262)"/>
<line y1="-0.5" x2="17.5839" y2="-0.5" transform="matrix(-0.729831 0.683627 -0.729831 -0.683628 12.9673 0.135986)"/>
</svg><span>Удалить</span></button>
</section>`
}
