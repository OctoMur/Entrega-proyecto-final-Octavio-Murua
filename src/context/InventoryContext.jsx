import { createContext, useState, useEffect } from "react"
import { getData } from "../functions/importProducts"

export const inventoryContext = createContext();

const InventoryContext = ({children}) => {
    const [products, setProducts] = useState([])

    useEffect(()=>{
        getData()
        .then((res) => setProducts(res))
    }, [])

    return (
        <inventoryContext.Provider value={{products, setProducts}}>
            {children}
        </inventoryContext.Provider>
    )
}

export default InventoryContext