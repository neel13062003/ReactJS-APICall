import React from 'react'

// const Coin = ({name,symbol,imgsrc,price}) => {
const Coin = (props) => {
  return (
    <div>
        {/* <img src={imgsrc} alt={name}/>
        <h1>{symbol}</h1>
        <p>{name}</p>
        <p>{price}</p> */}

        <img src={props.imgsrc} alt={props.name}/>
        <h1>{props.symbol}</h1>
        <p>{props.name}</p>
        <p>{props.price}</p>
    </div>
  )
}

export default Coin;