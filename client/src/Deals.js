import React from 'react'
import './deals.css'
import Card from './card'

const Deals = () => {
  return (
    <>
    <div className='deals-container'>
      <div className="horizontal-slider-container" >
      <h1 className='head'>Hot Deals!!!</h1>
        <ul className="horizonal-slider" style={{"gridTemplateColumns":"repeat(10, calc(70% - var(--gutter) * 2))"}} >
        <li className="item"><Card/></li>
        <li className="item"><Card/></li>
        <li className="item"><Card/></li>
        <li className="item"><Card/></li>
        <li className="item"><Card/></li>
        <li className="item"><Card/></li>
        </ul>
      </div>
      </div>
    </>
  )
}

export default Deals
