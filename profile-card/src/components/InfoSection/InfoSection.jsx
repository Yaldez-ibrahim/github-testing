import React from 'react'
import './InfoSection.css'

function InfoSection() {
  return (
    <div id='InfoSection'>
        <h2>Victor Crest <span> 26</span></h2>
        <label>London</label>
        <hr></hr>
        <div>
            <div className='subDiv'>
                <h2>80K</h2>
                <label>Followers</label>
            </div>
            <div className='subDiv'>
                <h2>803K</h2>
                <label>Likes</label>
            </div>
            <div className='subDiv'>
                <h2>1.4K</h2>
                <label>Photos</label>
            </div>
        </div>
    </div>
  )
}

export default InfoSection