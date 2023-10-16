import { useContext} from 'react'
import cartIcon from '../../assets/icons/cart.svg'
import { CartCntxt } from '../../context/CartContext'
import { Link } from 'react-router-dom'

function CartWidget() {
    const {totalQuantity} = useContext(CartCntxt)

    const cartWidgetStyle = {
        display: totalQuantity === 0 ? 'none' : 'block',
    };

    return (
        <Link to={'/cart'}>
            <div>
                <span style={cartWidgetStyle}>{totalQuantity}</span>
                <img src={cartIcon} alt=""/>
            </div>
        </Link>
    )
}

export default CartWidget