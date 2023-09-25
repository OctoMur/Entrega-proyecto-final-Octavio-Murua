import ItemDetailsContaner from "../components/itemDetailsCotaner/ItemDetailsContaner"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function ItemDetail({productsForFilter}) {

    const [productSelect, setProductSelect] = useState({})
    const idProductParam = useParams()
    

    useEffect(() => {

        const result = productsForFilter.find((prod) => prod.id === idProductParam)

        setProductSelect(result)
        console.log(result)
    }, [idProductParam, productsForFilter])
    console.log(productsForFilter)

    console.log(idProductParam)
    

    return (
        <ItemDetailsContaner productSelected = {productSelect}/>
    )
}

export default ItemDetail