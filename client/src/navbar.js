import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className='navbar'>
        <i className="fa-solid fa-bars"></i>
        <div className='nav-buttons'>
        <Link to='/'>Home</Link>
        <a href=''>About</a>
        <Link to ='/register'>Register</Link>
        <Link to ="/login">Login</Link>
        </div>

          <input type='name' placeholder='Search'></input>
          <i className="fa-solid fa-magnifying-glass"></i>
          

      <a id='cart' href=''>Cart
       <i className="fa-solid fa-cart-shopping"></i>
      </a>
      </div>
    </>
  )
}

export default Navbar
