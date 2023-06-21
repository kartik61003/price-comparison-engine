import React from 'react'
const style ={height:'250px', width:'270px', flex:'1'}
const Topbrands = () => {
  return (
    <>
      <div className="horizontal-slider-container" style={{height:'400px'}}>
      <h1>Top Brands!!</h1>
        <ul className="horizonal-slider" style={{"gridTemplateColumns":"repeat(10, calc(35% - var(--gutter) * 2))"}}>
        <li className="item"><a><img style={style} src='https://upload.wikimedia.org/wikipedia/commons/a/ab/Apple-logo.png' alt=''></img></a></li>
        <li className="item"><a><img style={style} src='https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg' alt=''></img></a></li>
        <li className="item"><a><img style={style} src='https://upload.wikimedia.org/wikipedia/commons/a/ae/Xiaomi_logo_%282021-%29.svg' alt=''></img></a></li>
        <li className="item"><a><img style={style} src='https://upload.wikimedia.org/wikipedia/commons/b/bf/LG_logo_%282015%29.svg' alt=''></img></a></li>
        <li className="item"><a><img style={style} src='https://upload.wikimedia.org/wikipedia/commons/c/ca/Sony_logo.svg' alt=''></img></a></li>
        <li className="item"><a><img style={style} src='https://upload.wikimedia.org/wikipedia/commons/1/13/Vivo_logo_2019.svg' alt=''></img></a></li>
        </ul>
</div>
    </>
  )
}

export default Topbrands
