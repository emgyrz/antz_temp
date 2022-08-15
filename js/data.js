const products = [
  {
    name: 'Увлажнитель воздуха &shy; STARWIND SHC1322, 3л, &shy; белый',
    price: 1650
  },
  {
    name: 'Триммер PHILIPS &shy; HC3521/15 &shy; серебристый/чёрный',
    price: 2290
  },
  {
    name: 'Фитнес-трекер HONOR &shy; Band 5 CRS-B19S, 095", &shy; розовый',
    price: 2390
  },
  {
    name: 'Мышь A4TECH Bloody V3, &shy; игровая, оптическая, &shy; приводная, USB, черный',
    price: 960
  },
  {
    name: 'Фитнес-трекер HONOR &shy; Band 5 CRS-B19S, 095", &shy; черный',
    price: 2390
  },
  {
    name: 'Пылесос SINBO SVC 3497, &shy; 2500Вт, синий/серый',
    price: 5670
  },
  {
    name: 'Планшет DIGMA Optima &shy; 7 Z800 Android 10.0 &shy; серебристый',
    price: 9490
  },
  {
    name: 'Монитор игровой ACER &shy; Nitro RG241YPbiipx 23.8" &shy; черный',
    price: 16800
  },
  {
    name: 'Экшн-камера DIGMA &shy; DICAM 310 4K, WiFi, &shy; черный',
    price: 2290
  },
  {
    name: 'Умная колонка ЯНДЕКС &shy; с голосовым помощником &shy; Алисой, серебристый',
    price: 5670
  },
  {
    name: 'Квадрокоптер DJI Mini 2 &shy; MT2PD Fly More Combo &shy; с камерой, серый',
    price: 60990
  },
  {
    name: 'Шлем виртуальной &shy; реальности HTC Vive PRO &shy; Eye EEA, черный/синий',
    price: 11960
  },
  {
    name: 'МФУ лазерный CANON i-Sensys MF445dw, A4, &shy; лазерный, черный',
    price: 35310
  },
  {
    name: 'Смарт-часы AMAZFIT Bip U, &shy; 1.43, зеленый/зеленый',
    price: 4490
  },
  {
    name: 'Кофемашина PHILIPS &shy; EP1224/00 серый/черный',
    price: 29990
  },
  {
    name: 'Гироскутер MIZAR &shy; MZ10,5CN,10.5", карбон',
    price: 12990
  },
]

products.forEach((product, ind) => {
  const id = ind + 1
  product.id = id
  product.imgSrc = `/img/products/${id}.svg`
})

export default products
