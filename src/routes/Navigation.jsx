import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import ItemDetail from "../pages/ItemDetail";
const Navigation = ({products}) =>{
    
    const routes = createBrowserRouter([
        {
            path: "/",
            element: <Home productos = {products}/>
        },
        {
            path:"/product/:id",
            element: <ItemDetail productsForFilter = {products}/>
        }
    ])

    console.log(products)
    return(<RouterProvider router={routes}/>)
}

export default Navigation