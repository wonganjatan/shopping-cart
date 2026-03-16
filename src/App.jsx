import { useState } from 'react'
import './App.css'
import { Link, Outlet } from 'react-router'

function App() {
  return (
    <>
      <h1>Shopping Cart</h1>
      <nav className='nav'>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/cart">Cart</Link>
      </nav>
      <Outlet/>
    </>
  )
}

export default App
