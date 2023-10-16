import React, { useContext, useEffect, useState } from 'react'
import Layout from '../components/Layout/Layout'
import { CartCntxt } from '../context/CartContext'
import ItemCardToCart from '../components/ItemCardToCart/ItemCardToCart'
import { Link } from 'react-router-dom'

const Cart = () => {
    const {cart,clear} = useContext(CartCntxt)
    const [cartValue, setCartValue] = useState(0)

    const calculateValueCart = () =>{
        const valueCart = cart.reduce((acc, prod) => acc + prod.quantity * prod.price, 0)
        setCartValue(valueCart)
        console.log(valueCart)
    }

    useEffect(()=>{
        calculateValueCart()
    },[calculateValueCart])

    return (
        <Layout>
            <div>
                {!cart.length ? 
                    <div>
                        <h1>CARRITO VACIO</h1>
                        <Link to={'/'}>Home</Link>
                    </div>
                    :
                    <>
                        <div className="contanerCard">
                        {cart.map((prod) =>{
                            return(
                                <ItemCardToCart key = {prod.id} product = {prod}/>
                            )
                        })
                        }
                        </div>
                        
                        <div>
                            <h1>Total de la compra: ${cartValue}</h1>
                        </div>

                        <button onClick={()=>clear()}>Limpiar Carrito</button>
                    </>
                }
            </div>
        </Layout>
    )
}

export default Cart