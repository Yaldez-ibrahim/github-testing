import React from 'react'
import './SingleItem.css'

function SingleItem(props) {
  return (
    <div id='SingleItem'>
        <img src={props.icon}/>
        <label>{props.link}</label>
    </div>
  )
}

export default SingleItem