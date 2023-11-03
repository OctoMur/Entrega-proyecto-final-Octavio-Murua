import './App.css'
import CartContext from './context/CartContext.jsx'
import Navigation from './routes/Navigation.jsx'


function App() {

  return (
      <CartContext>
        <Navigation/>
      </CartContext>
  )
}

export default App
