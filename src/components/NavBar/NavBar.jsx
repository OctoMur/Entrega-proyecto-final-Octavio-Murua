import './navBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'


function NavBar() {
    return (
        <div className='navBar'>
            <span> </span>
            <Link to={'/'} className='title'>7_Component</Link>
            <CartWidget/>
        </div>
    )
}

export default NavBar