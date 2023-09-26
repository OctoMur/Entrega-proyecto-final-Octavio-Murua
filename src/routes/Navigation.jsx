import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import ItemDetail from "../pages/ItemDetail";
import Category from "../pages/Category";


const Navigation = ({products}) =>{
    
    const routes = createBrowserRouter([
        {
            path: "/",
            element: <Home productos = {products}/>
        },
        {
            path:"/product/:id",
            element: <ItemDetail productsForFilter = {products}/>
        },
        {
            path:"/category/:idCategory",
            element: <Category productsForFilter = {products}/>
        }
    ])
    return(<RouterProvider router={routes}/>)
}

export default Navigation