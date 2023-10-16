import ItemCount from '../ItemCount/ItemCount';
import './ItemDetailsContaner.css'


function ItemDetailsContaner({ productSelected }) {

    return (
        <div>
            {productSelected ?
            <div className='itemDetailsContaner'>
                <img src={productSelected.img} alt={productSelected.id} />
                <h1>{productSelected.id}</h1>
                <h2>${productSelected.price}</h2>
                <p>{productSelected.description}</p>
                <ItemCount productSelected={productSelected}/>
            </div>
            :
            <h1>Cargando...</h1>}
        </div>
    );
}

export default ItemDetailsContaner;