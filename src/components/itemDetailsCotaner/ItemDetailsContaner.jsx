import ItemCount from '../ItemCount/ItemCount';
import './ItemDetailsContaner.css'


function ItemDetailsContaner({ productSelected }) {

    return (
        <div className='itemDetailsContaner'>
            {productSelected ?
            <div >
                <img src={productSelected.img} alt={productSelected.name} />
                <h1>{productSelected.name}</h1>
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