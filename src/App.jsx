
import { useState, useEffect } from 'react'
import './App.css'
import data from './inventario.json'
import Navigation from './routes/Navigation'


function App() {

  const [productos, setProductos] = useState([])

  const getData = () =>{
      return new Promise((resolve, reject) =>{
          resolve(data)
      })
  }
  
  useEffect(()=>{
      getData()
      .then((res) => {
          setProductos(res)
      })
  }, [])
    
  return (
    <>
      <Navigation products={productos}/>
    </>
  )
}

export default App
