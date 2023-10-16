import { useContext, useState } from "react"
import AddItemButton from "../AddItemButton/AddItemButton"
import { CartCntxt } from "../../context/CartContext"

const ItemCount = ({productSelected}) => {

    const {removeOfCart, clear, isInCart} = useContext(CartCntxt)
    const [quantity, setQuantity] = useState(1)

    return (
        <div>
            <button onClick={() => quantity > 1 ? setQuantity(quantity -1) : quantity}>-</button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity(quantity +1)}>+</button>

            <AddItemButton productSelected={productSelected} quantity={quantity}/>
            {/* <button onClick={() => removeOfCart({productSelected})}>Quitar del carrito</button> */}
            {/* <button onClick={() => clear()}>Limpiar carrito</button> */}
            
            {/* {isInCart({productSelected})} */}
        </div>
    )
}

export default ItemCount