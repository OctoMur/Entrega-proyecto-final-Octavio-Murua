import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import ItemDetail from "../pages/ItemDetail";
import Category from "../pages/Category";


const Navigation = () =>{
    
    const routes = createBrowserRouter([
        {
            path: "/",
            element: <Home />
        },
        {
            path:"/category/:idCategory",
            element: <Category />
        },
        {
            path:"/item/:id",
            element: <ItemDetail />
        }
        
    ])
    return(<RouterProvider router={routes}/>)
}

export default Navigation