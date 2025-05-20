const cartItems = localStorage.getItem('cart')
let cart = !cartItems?  [] : JSON.parse(cartItems)
const addToCart = (item:any)=>{
    cart= [...cart, item]
    localStorage.setItem('cart', JSON.stringify(cart))
}

const getCartLength = ()=>{
    return cart.length
}
export default {
    cart,
    addToCart,
    getCartLength
}