import { useState,useEffect } from "react"
import { useParams} from "react-router-dom"
import ItemCardContaner from "../components/itemCardContaner/ItemCardContaner"
import Header from "../components/header/Header"

function CategoryPage({productsForFilter}) {

    const [productsFiltered, setProductsFiltered] = useState([])
    const {idCategory} = useParams()
    
    useEffect(() => {
        const result = productsForFilter.filter((producto) => producto.category === idCategory)
        setProductsFiltered(result)

    },[idCategory,productsForFilter])

    return (
        <>
            <Header/>
            <ItemCardContaner productos = {productsFiltered}/>
        </>
    )
}

export default CategoryPage