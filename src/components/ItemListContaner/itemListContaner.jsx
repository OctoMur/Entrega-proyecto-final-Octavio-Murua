import { useState, useEffect, useContext } from "react"
import ItemCard from "../ItemCard/ItemCard"
import "./ItemListContaner.css"
import { useParams } from "react-router-dom"
import Layout from "../Layout/Layout"

import {inventoryContext} from "../../context/InventoryContext"

const ItemListContaner = () =>{
    const {products} = useContext(inventoryContext)
    const {idCategory} = useParams()
    const [productsSelected, setProductsSelected] = useState([])



    useEffect(() => {
        idCategory != undefined ? 
        
        setProductsSelected(products.filter((products) => products.category === idCategory))
        :
        setProductsSelected(products)
    }, [idCategory, products])


    return(
        <Layout>
            <div className="contanerCard">
            {productsSelected.map((prod) =>{
                return(
                    <ItemCard key = {prod.id} product = {prod}/>
                )
            })
            }
        </div>
        </Layout>
    )
}

export default ItemListContaner