import React from 'react'
import './ImgSection.css'
import personPhoto from '../../assets/images/image-victor.jpg'

function ImgSection() {
  return (
    <div id="ImgSection">
        <div id='photoDiv'>
            <img id='personPhoto' src={personPhoto}/>
        </div>
    </div>
  )
}

export default ImgSection