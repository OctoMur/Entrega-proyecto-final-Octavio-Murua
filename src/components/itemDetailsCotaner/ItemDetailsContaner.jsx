

function ItemDetailsContaner({productSelected}) {
    // if (!productSelected) {
    //     return <div>No se ha seleccionado ningún producto.</div>;
    // }
    // console.log(productSelected)
    return (
        <div>
            <img src={productSelected.img} alt={productSelected.id} />
            <h1>{productSelected.id}</h1>
            <h2>{productSelected.price}</h2>
            <p>{productSelected.description}</p>
        </div>
    )
}

export default ItemDetailsContaner