import React from 'react'
import './news.css'
import Post from './post'

const News = () => {
  return (
    <>
      <div className='news-container'>
         <h1 className='head'>News</h1>
         <div className='news-box'>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
         </div>
         
      </div>
    </>
  )
}

export default News
