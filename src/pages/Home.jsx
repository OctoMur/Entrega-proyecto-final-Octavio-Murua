
import ItemCardContaner from "../components/itemCardContaner/ItemCardContaner"

function Home({productos}) {
    return (
        <>
            <ItemCardContaner productos = {productos}/>
        </>
    )
}

export default Home