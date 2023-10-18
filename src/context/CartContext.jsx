import { createContext, useContext, useState } from "react"

export const CartCntxt = createContext();

const CartContext = ({children}) => {

    const [cart, setCart] = useState([])
    const [totalQuantity, setTotalQuantity] = useState(0)
    console.log(cart)//eliminar


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
    }

    const removeOfCart = ({product}) => {

        const productForRemove = cart.findIndex((prod) => prod.name === product.name)

        cart.splice(productForRemove, 1)
        accQuantity()

        console.log(productForRemove)
        console.log(cart) // eliminar
    }

    const clear = () => {
        cart.splice(0, cart.length)
        accQuantity()
        console.log(cart)//eliminar
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
    }

    return (
        <CartCntxt.Provider value={{cart, setCart, addToCart, removeOfCart, clear, isInCart, accQuantity, totalQuantity, setTotalQuantity}}>
            {children}
        </CartCntxt.Provider>
    )
}

export default CartContext