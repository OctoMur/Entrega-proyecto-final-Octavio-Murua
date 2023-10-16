import { Link } from 'react-router-dom'
import './CategoryContaner.css'

function CategoryContaner() {

    return (
        <div className='itemListContaner'>

            <li className="contaner">
                <Link to={'/'}>Todo</Link>
                <Link to={'/category/Hardware'}>Componentes</Link>
                <Link to={'/category/Equipment'}>Equipos</Link>
                <Link to={'/category/Furniture'}>Muebles</Link>
            </li>
        </div>
    )
}

export default CategoryContaner