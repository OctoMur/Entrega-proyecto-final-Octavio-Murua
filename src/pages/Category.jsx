import { useState,useEffect } from "react"
import { useParams} from "react-router-dom"
import ItemListContaner from "../components/ItemListContaner/itemListContaner"
import Header from "../components/Header/Header"

function CategoryPage() {

    return (
        <>
            <Header/>
            <ItemListContaner/>
        </>
    )
}

export default CategoryPage