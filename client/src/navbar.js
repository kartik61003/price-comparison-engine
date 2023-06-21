import React from 'react'

const Navbar = () => {
  return (
    <>
      <div className='navbar'>
        <i className="fa-solid fa-bars"></i>
        <div className='nav-buttons'>
        <a href=''>Home</a>
        <a href=''>About</a>
        <a href=''>Contact</a>
        <a href=''>Login</a>
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
