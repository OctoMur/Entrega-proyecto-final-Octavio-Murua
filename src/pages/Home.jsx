
import ItemCardContaner from "../components/itemCardContaner/ItemCardContaner"
import Header from '../components/header/Header'
function Home({productos}) {
    return (
        <>
            <Header/>
            <ItemCardContaner productos = {productos}/>
        </>
    )
}

export default Home