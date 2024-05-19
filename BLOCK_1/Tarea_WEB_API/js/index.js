const calculateButton = document.getElementById('btn-success')
const deleteButton = document.querySelectorAll('.btn-delete')
const unityPrice = document.getElementsByClassName('unity')
const quantity = document.getElementsByClassName('quantitys')
const productPrice = document.getElementsByClassName('productsPrice')
const resultPrice = document.getElementById('totalPrice')
const productContainer = document.getElementsByClassName('product__container')
const fatherContainer = document.getElementById('container')
const createProducts = document.querySelectorAll('.createProduct')
const createButton = document.getElementById('create__btn')
let counter = 3


calculateButton.addEventListener('click', () => {
  let total = 0
  for (let i = 0; i < quantity.length; i++) {
    if (unityPrice[i].value !== '') {
      productPrice[i].innerText = parseInt(unityPrice[i].value) * parseInt(quantity[i].innerText) + '€'
      total +=  parseInt(productPrice[i].innerText)
    } else {
      productPrice[i].innerText = 0 + '€'
      total += parseInt(productPrice[i].innerText)
    }
  }
  resultPrice.innerText = total + '€'
})

deleteButton.forEach((item) => {
  item.addEventListener('click', (e) => {
    fatherContainer.removeChild((e.currentTarget.parentNode).parentNode)
  })
})

const deleteBut = (e) => {
  fatherContainer.removeChild((e.currentTarget.parentNode).parentNode)
}


createButton.addEventListener('click', () => {
  if (createProducts[0].value && createProducts[1].value) {
    const newDiv = document.createElement('div')
    fatherContainer.appendChild(newDiv)
    newDiv.setAttribute('id', `Product${counter}`)
    newDiv.setAttribute('class', 'product__container')
    newDiv.innerHTML = `<div class="products__container"><span>${createProducts[0].value}</span></div>
    <div class="products__container"><span class="quantitys">${createProducts[1].value}</span></div>
    <div class="products__container"><label for="text" class="quantity">QTY</label><input class="unity" type="text"></div>
    <div class="products__container"><span class="productsPrice">0$</span></div>
    <div class="products__container"><button id="btn1" class="btn-delete">Delete</button></div>`
    newDiv.getElementsByClassName('btn-delete')[0].onclick = deleteBut
    counter++
    createProducts[0].value = ''
    createProducts[1].value = ''
  } else {
    window.alert('You need to introduce a Product and a unitary price')
  }
}) 