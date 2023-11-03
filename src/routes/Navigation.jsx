import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ItemListContaner from "../components/ItemListContaner/itemListContaner"
import ItemDetail from "../pages/ItemDetail";
import Cart from "../pages/Cart"
import CheckOut from "../pages/CheckOut";


const Navigation = () =>{
    
    const routes = createBrowserRouter([
        {
            path: "/",
            element: <ItemListContaner/>
        },
        {
            path:"/category/:idCategory",
            element: <ItemListContaner/>
        },
        {
            path:"/item/:id",
            element: <ItemDetail/>
        },
        {
            path:"/cart",
            element: <Cart/>
        },
        {
            path:"/checkout",
            element: <CheckOut/>
        }
    ])
    return(
        <>
            <RouterProvider router={routes}/>
        </>
    )
}

export default Navigation