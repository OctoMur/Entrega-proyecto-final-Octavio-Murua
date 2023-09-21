
import { useState, useEffect } from 'react'
import './App.css'
import ItemCardContaner from './components/ItemCardContaner/ItemCardContaner'
import NavBar from './components/NavBar/NavBar'
import ItemListContaner from './components/listContaner/ItemListContaner'

function App() {

  const [productos, setProductos] = useState([])

  const getProductos = async () => {
    try{
      const data = await fetch('./inventario.json')
      setProductos(data)
    }
    catch(error){
      console.error(error)
    }
    
  }
  

  useEffect( () => {
    getProductos()
  }, [])


  console.log(productos)

  return (
    <>
      <NavBar />
      <ItemListContaner/>
      {/* <ItemCardContaner/> */}
    </>
  )
}

export default App
