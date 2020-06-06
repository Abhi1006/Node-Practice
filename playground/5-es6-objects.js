//object property short hand

const name = 'Abhi'
const userAge = 29

const user  = {
    name,
    age: userAge,
    location: 'Jagtial'
}

console.log(user)

//Object destructing

const product = {
    label: 'Abhi book',
    price: 9,
    stock: 549,
    salePrice: undefined,
    rating: 9
}

// const label = product.label
// const stock = product.stock

// const {label:productlabel, stock, rating} = product
// console.log(productlabel)
// console.log(stock)
// console.log(rating)


const transaction= (type, { label, stock }) => {
    console.log(type, label, stock)
}

transaction('order', product)