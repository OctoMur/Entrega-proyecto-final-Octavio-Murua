import { createContext, useState } from "react"

export const CartCntxt = createContext();

const CartContext = ({children}) => {
    const cartInStorage = JSON.parse(localStorage.getItem('cart')) || [];
    const [cart, setCart] = useState(cartInStorage)
    const [totalQuantity, setTotalQuantity] = useState(0)
    

    const addToCart = ({productSelected, quantity}) =>{

        const productToAdd={...productSelected, quantity}

        const backUpCart = [...cart]
        const searchProduct = backUpCart.find((prod) => prod.name === productToAdd.name)

        if(searchProduct){
            searchProduct.quantity += quantity
            setCart(backUpCart)
        }
        else{
            setCart( [...cart, productToAdd] )
        }
        accQuantity()
    }

    const removeOfCart = ({product}) => {

        const productForRemove = cart.findIndex((prod) => prod.name === product.name)

        cart.splice(productForRemove, 1)
        accQuantity()

    }

    const clear = () => {
        cart.splice(0, cart.length)
        accQuantity()
    }

    const isInCart = ({productSelected}) =>{
        const searchProduct = cart.find((prod) => prod.name === productSelected.name)

        searchProduct !== undefined ? 
        console.log("Este producto ya esta en el carrito") 
        : 
        console.log("Este producto no esta en el carrito")
    }

    const accQuantity = () =>{
        const quantityPerProduct = cart.reduce((acc, prod) => acc + prod.quantity, 0)
        setTotalQuantity(quantityPerProduct)
        localStorage.setItem('cart', JSON.stringify(cart));
        console.log(localStorage)
    }

    const calculateValueCart = () =>{
        const valueCart = cart.reduce((acc, prod) => acc + prod.quantity * prod.price, 0)
        return valueCart;
    }


    return (
        <CartCntxt.Provider value={{cart, setCart, addToCart, removeOfCart, clear, isInCart, accQuantity, totalQuantity, setTotalQuantity, calculateValueCart}}>
            {children}
        </CartCntxt.Provider>
    )
}

export default CartContext