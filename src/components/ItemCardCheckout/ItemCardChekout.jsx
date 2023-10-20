
const ItemCardChekout = ({product}) => {

    return (
        <div>
            <img src={product.img} alt={product.name} />
            <h2>{product.name}</h2>
            <h3>Cantidad: {product.quantity}</h3>
            <h2>PrecioTotal: ${product.quantity * product.price}</h2>
        </div>
    )
}

export default ItemCardChekout