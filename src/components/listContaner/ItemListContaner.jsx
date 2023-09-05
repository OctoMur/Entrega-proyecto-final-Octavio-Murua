import './itemListaContaner.css'

function ItemListContaner(prop) {

    const {greeting} = prop



    return (
        <div className='itemListContaner'>

            

            <li className="contaner">
                <span className='saludo'>Hola {greeting}, bienvenido/a!</span>
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
            </li>
        </div>
    )
}

export default ItemListContaner