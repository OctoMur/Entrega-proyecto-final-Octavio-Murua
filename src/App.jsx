
import { useState, useEffect } from 'react'
import './App.css'
import data from './inventario.json'
import Navigation from './routes/Navigation'
import Home from './pages/Home'
import Header from './components/header/Header'

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
      <Header/>
      <Navigation products={productos}/>
    </>
  )
}

export default App
