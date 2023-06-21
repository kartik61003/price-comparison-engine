import React from 'react'
import Card from './card'

const Products = () => {
  return (
    <>
      <div className="horizontal-slider-container">
      <h1>Featured Products</h1>
        <ul className="horizonal-slider">
        <li className="item"><Card/></li>
        <li className="item"><Card/></li>
        <li className="item"><Card/></li>
        <li className="item"><Card/></li>
        <li className="item"><Card/></li>
        <li className="item"><Card/></li>
        </ul>
</div>
    </>
  )
}

export default Products
