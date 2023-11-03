import ItemDetailsContaner from "../components/ItemDetailsContaner/ItemDetailsContaner"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Layout from "../components/Layout/Layout"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../db/db"


function ItemDetail() {
    const [productSelect, setProductSelect] = useState({})
    const { id } = useParams()



    useEffect(() => {
        const product = doc(db, "products", id)


        getDoc(product).then((res) => {

            if(res.exists()){
                const productImport = {
                    id: res.id,
                    ...res.data()
                }
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