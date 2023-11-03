import { useContext } from "react"
import Layout from "../components/Layout/Layout"
import { CartCntxt } from "../context/CartContext"
import ItemCardChekout from "../components/ItemCardCheckout/ItemCardChekout"
import CheckOutForm from "../components/CheckOutForm/CheckOutForm"

const CheckOut = () => {
    const {cart} = useContext(CartCntxt)

    return (
        <Layout>
            <h1>Detalle de la compra</h1>
            <div className="contanerCard">
                {cart.map((prod) =>{
                    return(
                        <ItemCardChekout key = {prod.id} product = {prod}/>
                        )
                    })
                }
                <CheckOutForm listProducts={cart}/>
            </div>
        </Layout>
    )
}

export default CheckOut