import React from 'react'

import News from '../News';
import Products from '../products';
import Topbrands from '../topbrands';
import Deals from '../Deals';

const IndexPage = () => {
  return (
    <>
    
      <Products/>
      <Topbrands/>
      <div className='container2'>
      <News/> 
      <Deals/>
      </div>
    </>
  )
}

export default IndexPage
