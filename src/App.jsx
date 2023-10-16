import './App.css'
import CartContext from './context/CartContext'
import InventoryContext from './context/InventoryContext'
import Navigation from './routes/Navigation'


function App() {

  return (
    <InventoryContext>
      <CartContext>
        <Navigation/>
      </CartContext>
    </InventoryContext>
  )
}

export default App
