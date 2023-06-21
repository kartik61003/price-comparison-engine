import React from 'react'

const Card = () => {
  return (
    <>
      <div className="card">
      <div className="photo">
      <img src='images/S21FE_ColorSelection_Lavender_MO.webp'></img>
      </div>
      <div className="description">
      <h2>SAMSUNG Galaxy S21 FE 5G</h2>
      <h4>128GB | 8GB</h4>
      <h1>₹34999.00</h1>
      <p>Smooth scrolling
        The 120Hz display technology delivers a super smooth scroll, with optimized refresh rate, and a fast touch response gives seamless visuals in both work and play.
        Real display vision
        The high quality display with Dynamic AMOLED 2X delivers vibrant color and brightness, even in bright sunlight.</p>
      <button>Add to Cart</button>
      <button>Wishlist</button>
    </div>
  </div>
    </>
  )
}

export default Card
