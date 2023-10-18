import React, { useContext, useState } from 'react'
import { CartCntxt } from '../../context/CartContext'

const ItemCardToCart = ({product}) => {
    const {removeOfCart} = useContext(CartCntxt)
    const [totalProduct, setTotalProduct] = useState(product.price * product.quantity)

    return (
        <div className='itemCardToCart'>
            <img src={product.img} alt={product.name} />
            <h2>{product.name}</h2>
            <h3>Cantidad: {product.quantity}</h3>
            <h4>Precio por unidad: ${product.price}</h4>
            <h1>PrecioTotal: ${totalProduct}</h1>
            <button onClick={()=>removeOfCart({product})}>Eliminar del Carrito</button>
        </div>
    )
}

export default ItemCardToCart