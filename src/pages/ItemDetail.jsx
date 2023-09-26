import ItemDetailsContaner from "../components/itemDetailsCotaner/ItemDetailsContaner"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Header from '../components/header/Header'

function ItemDetail({productsForFilter}) {

    const [productSelect, setProductSelect] = useState({})
    const {id} = useParams()

    const idProductParam = id.toString()
    console.log(idProductParam)

    useEffect(() => {

        const result = productsForFilter.find((prod) => prod.id === idProductParam)

        setProductSelect(result)
    }, [idProductParam, productsForFilter])
    

    return (
        <>
            <Header/>
            <ItemDetailsContaner productSelected = {productSelect}/>
        </>
    )
}

export default ItemDetail