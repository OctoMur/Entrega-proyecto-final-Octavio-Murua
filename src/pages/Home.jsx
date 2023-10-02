
import ItemListContaner from "../components/ItemListContaner/itemListContaner"
import Header from '../components/Header/Header'

function Home({productos}) {
    return (
        <>
            <Header/>
            <ItemListContaner productos = {productos}/>
        </>
    )
}

export default Home