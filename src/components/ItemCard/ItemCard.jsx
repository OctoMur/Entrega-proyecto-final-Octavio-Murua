import "./ItemCard.css"
import { Link } from "react-router-dom"

const ItemCard = ({product}) => {
    
    return(
        <div className="card">
            <img src={product.img} alt={product.name} className="imgProduct"/>
            <h2>{product.name}</h2>
            <h4>${product.price}</h4>
            <Link to={`/item/${product.id}`}>Ver detalle</Link>
        </div>
    )
}

export default ItemCard