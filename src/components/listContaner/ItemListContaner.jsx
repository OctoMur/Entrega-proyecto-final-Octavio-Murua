import { Link } from 'react-router-dom'
import './itemListaContaner.css'

function ItemListContaner() {

    return (
        <div className='itemListContaner'>

            <li className="contaner">
                <Link to={'/'}>Todo</Link>
                <Link to={'/category/Hardware'}>Hardware</Link>
                <Link to={'/category/Equipment'}>Equipment</Link>
                <Link to={'/category/Furniture'}>Furniture</Link>
            </li>
        </div>
    )
}

export default ItemListContaner