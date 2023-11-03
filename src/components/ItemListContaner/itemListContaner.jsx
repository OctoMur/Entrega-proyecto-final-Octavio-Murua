import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import {db} from "../../db/db"
import ItemCard from "../ItemCard/ItemCard"
import Layout from "../Layout/Layout"
import "./itemListContaner.css"
import { collection, getDocs, query, where } from "firebase/firestore"


const ItemListContaner = () =>{
    const {idCategory} = useParams()
    const [productsSelected, setProductsSelected] = useState([])



    useEffect(() => {
        const productsList = collection(db, "products")
        const filterForCategory = idCategory && query(productsList, where("category", "==", idCategory))
        const queryRef = idCategory ? filterForCategory : productsList

        getDocs(queryRef).then((res) => {
            const productsImport = res.docs.map((prod)=>(
                {
                    id: prod.id,
                    ...prod.data()
                }
            ))
            setProductsSelected(productsImport)
        })
    }, [idCategory])


    return(
        <Layout>
            <div className="contanerCard">
            {productsSelected.map((prod) =>{
                return(
                    <ItemCard key = {prod.name} product = {prod}/>
                )
            })
            }
        </div>
        </Layout>
    )
}

export default ItemListContaner