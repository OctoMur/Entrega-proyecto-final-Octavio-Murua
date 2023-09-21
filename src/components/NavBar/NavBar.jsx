import './navBar.css'
import CartWidget from '../cartWidget/CartWidget'


function NavBar() {
    return (
        <div className='navBar'>
            <span> </span>
            <a href="#" className='title'>7_Component</a>
            <CartWidget/>
        </div>
    )
}

export default NavBar