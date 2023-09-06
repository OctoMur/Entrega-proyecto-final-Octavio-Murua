import './navBar.css'
import Cart from '../cartWidget/CartWidget'


function NavBar() {
    return (
        <div className='navBar'>
            <span> </span>
            <span className='title'>7_Component</span>
            <Cart/>
        </div>
    )
}

export default NavBar