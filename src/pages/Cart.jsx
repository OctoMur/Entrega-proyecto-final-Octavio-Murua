import React, { useContext, useEffect, useState } from 'react'
import Layout from '../components/Layout/Layout'
import { CartCntxt } from '../context/CartContext'
import ItemCardToCart from '../components/ItemCardToCart/ItemCardToCart'
import { Link } from 'react-router-dom'

const Cart = () => {
    const {cart,clear, calculateValueCart} = useContext(CartCntxt)
    const [cartValue, setCartValue] = useState(0)



    useEffect(()=>{
        setCartValue(calculateValueCart)
    },[calculateValueCart])

    return (
        <Layout>
            <div>
                {!cart.length ? 
                    <div>
                        <h1>CARRITO VACIO</h1>
                        <Link to={'/'}><h3>VOLVER AL HOME</h3></Link>
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

                        <button onClick={()=>clear()}><h2>Limpiar Carrito</h2></button>
                        <Link to={'/checkout'}>
                            <button><h2>Finalizar compra</h2></button>
                        </Link>
                    </>
                }
            </div>
        </Layout>
    )
}

export default Cart