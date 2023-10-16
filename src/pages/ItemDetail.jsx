import ItemDetailsContaner from "../components/itemDetailsCotaner/ItemDetailsContaner"
import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { inventoryContext } from "../context/InventoryContext"
import Layout from "../components/Layout/Layout"


function ItemDetail() {
    const {products} = useContext(inventoryContext)
    const [productSelect, setProductSelect] = useState({})
    const {id} = useParams()

    const idProductParam = id.toString()

    useEffect(() => {

        const result = products.find((prod) => prod.id === idProductParam)

        setProductSelect(result)
    }, [idProductParam, products])
    

    return (
        <Layout>
            <ItemDetailsContaner productSelected = {productSelect}/>
        </Layout>
    )
}

export default ItemDetail