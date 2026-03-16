import { useState } from 'react'
import './App.css'
import { Link, Outlet } from 'react-router'

function App() {
  const [cart, setCart] = useState([])

  return (
    <>
      <h1>Shopping Cart</h1>
      <nav className='nav'>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/cart">
          Cart {cart.length > 0 && `(${cart.reduce((sum, item) => sum + item.qty, 0)})`}
        </Link>
      </nav>
      <Outlet context={{ cart, setCart}}/>
    </>
  )
}

export default App
