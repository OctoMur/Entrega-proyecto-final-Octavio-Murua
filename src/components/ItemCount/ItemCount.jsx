import { useState } from "react"
import AddItemButton from "../AddItemButton/AddItemButton"

const ItemCount = ({productSelected}) => {

    const [quantity, setQuantity] = useState(1)

    return (
        <div >
            <button onClick={() => quantity > 1 && setQuantity(quantity -1)}>-</button>
            <span>{quantity}</span>
            <button onClick={() => quantity < productSelected.stock && setQuantity(quantity +1)}>+</button>

            <AddItemButton productSelected={productSelected} quantity={quantity}/>
        </div>
    )
}

export default ItemCount