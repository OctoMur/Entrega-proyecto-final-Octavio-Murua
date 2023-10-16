import React, { useContext, useEffect } from 'react'
import { CartCntxt } from "../../context/CartContext"


const AddItemButton = ({productSelected, quantity}) => {
    const {addToCart, accQuantity} = useContext(CartCntxt)

    useEffect(()=>{
        accQuantity()
    }, [addToCart])

    return (
        <button onClick={() => addToCart({productSelected, quantity})} >Agregar al carrito</button>
    )
}

export default AddItemButton