import './navBar.css'
import CartWidget from '../cartWidget/CartWidget'


function NavBar() {
    return (
        <div className='navBar'>
            <span> </span>
            <span className='title'>7_Component</span>
            <CartWidget/>
        </div>
    )
}

export default NavBar