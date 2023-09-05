import './navBar.css'
import cart from '../../assets/icons/cart.svg'


function NavBar() {
    return (
        <div className='navBar'>
            <span> </span>
            <span className='title'>7_Component</span>
            <span><img src={cart} alt=""/>+99</span>
        </div>
    )
}

export default NavBar