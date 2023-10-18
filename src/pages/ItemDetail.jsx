import ItemDetailsContaner from "../components/itemDetailsCotaner/ItemDetailsContaner"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Layout from "../components/Layout/Layout"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../db/db"


function ItemDetail() {
    const [productSelect, setProductSelect] = useState({})
    const { id } = useParams()

    console.log(id)


    useEffect(() => {
        const product = doc(db, "products", "id")
        console.log(id)


        getDoc(product).then((res) => {

            if(res.exists()){
                const productImport = {
                    id: res.id,
                    ...res.data()
                }
                console.log(productImport)
                setProductSelect(productImport)
            }
            else{
                console.log("este producto no existe")
                console.log(res.exists())
            }
        })
    }, [id])
    

    return (
        <Layout>
            <ItemDetailsContaner productSelected = {productSelect}/>
        </Layout>
    )
}

export default ItemDetail