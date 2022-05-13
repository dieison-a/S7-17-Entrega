const products = [
  { title: "Uva Crimson", price: 1.56, category: "Frutas", image: undefined, imageDescription: "" },
  { title: "Banana", price: 2.47, category: "Frutas", image: "./img/products/product_2.svg", imageDescription: "" },
  { title: "Mamão", price: 3.38, category: "Frutas", image: "./img/products/product_3.svg", imageDescription: "" },
  { title: "Maçã", price: 4.29, category: "Frutas", image: "./img/products/product_4.svg", imageDescription: "" },
  { title: "Refrigerante", price: 5.1, category: "Bebidas", image: undefined, imageDescription: "" },
  { title: "Vinho", price: 6.01, category: "Bebidas", image: "./img/products/product_6.svg", imageDescription: "" },
  { title: "Água Tônica", price: 7.92, category: "Bebidas", image: undefined, imageDescription: "" },
  { title: "Água de coco", price: 8.83, category: "Bebidas", image: "./img/products/product_8.svg", imageDescription: "" },
  { title: "Sabonete", price: 9.74, category: "Higiene", image: "./img/products/product_9.svg", imageDescription: "" },
  { title: "Detergente", price: 1.65, category: "Higiene", image: "./img/products/product_10.svg", imageDescription: "" },
  { title: "Limpa superfícies", price: 2.56, category: "Higiene", image: "./img/products/product_11.svg", imageDescription: "" },
  { title: "Lustra Móveis", price: 3.47, category: "Higiene", image: undefined, imageDescription: "" },
];


let contentProduts = document.querySelector(".products-content")
let tagUl1 = document.createElement("ul")
let tagUl2 = document.createElement("ul")
let tagUl3 = document.createElement("ul")

let fruitsProduts = document.querySelector(".fruits")
fruitsProduts.appendChild(tagUl1)
let drinksProduts = document.querySelector(".drinks")
drinksProduts.appendChild(tagUl2)
let hygieneProduts = document.querySelector(".hygiene")
hygieneProduts.appendChild(tagUl3)

products.forEach((_, i) => {

  let liProduct = document.createElement("li")
  liProduct.classList.add("product")
  if (products[i].category == "Frutas") {
    tagUl1.appendChild(liProduct)
  }
  else if (products[i].category == "Bebidas") {
    tagUl2.appendChild(liProduct)
  }
  else if (products[i].category == "Higiene") {
    tagUl3.appendChild(liProduct)
  }

  let imgProduct = document.createElement("img")
  if (products[i].image == undefined) {
    imgProduct.src = `./img/products/no-img.svg`
  }
  else {
    imgProduct.src = `./img/products/product_${i + 1}.svg`
  }
  imgProduct.alt = products[i].title
  imgProduct.title = products[i].title
  imgProduct.classList.add("product-img")
  liProduct.appendChild(imgProduct)

  let mainProduct = document.createElement("main")
  mainProduct.classList.add("product-main")
  liProduct.appendChild(mainProduct)

  let titleProduct = document.createElement("h1")
  titleProduct.innerText = products[i].title
  titleProduct.classList.add("product-title")
  mainProduct.appendChild(titleProduct)

  let categoryProduct = document.createElement("product-category")
  categoryProduct.innerText = products[i].category
  categoryProduct.classList.add("product-category")
  mainProduct.appendChild(categoryProduct)

  let priceProduct = document.createElement("strong")
  priceProduct.innerText = `R$ ${products[i].price.toFixed(2).replace(".", ",")}`
  priceProduct.classList.add("product-price")
  mainProduct.appendChild(priceProduct)

})