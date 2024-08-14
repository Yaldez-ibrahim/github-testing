import React from 'react'
import './Contentcomponent.css'
import SingleItem from '../SingleItem/SingleItem'

import photo from "../../../public/Bitmap.png"
import location from"../../../public/003-pin.svg"
import urlIcon from"../../../public/002-url.png"
import twitter from"../../../public/004-twitter.png"
import office from"../../../public/001-office-building.png"




function Contentcomponent() {
    const ArrayOfObj=[
        {
            icon: location,
            txtLink: 'San Francisco'
        },
        {
            icon: urlIcon,
            txtLink: 'https://github.blog'
        },
        {
            icon: twitter,
            txtLink: 'Not Available'
        },
        {
            icon: office,
            txtLink: '@github'
        }
    ]
  return (
    <div id='Contentcomponent'>
        <img src={photo} id='lift'></img>
        <div id='right'>
            <div id='top'>
                <h1>The Octocat </h1>
                <label>Joined 25 Jan 2011</label>
            </div>
            <label>@octocat </label>
            <p>This profile has no bio</p>
            <div id='RFFbar'>
                <div id='repos'>
                    <label>Repos</label>
                    <h3>8</h3>
                </div>
                <div className='follow'>
                    <label>Followers</label>
                    <h3>3938</h3>
                </div>
                <div className='follow'>
                    <label>Following</label>
                    <h3>9</h3>
                </div>
            </div>
            <div id='endDiv'>
                <div>
                {
                    ArrayOfObj.slice(0, 2).map((item)=>{
                        return(
                            <SingleItem 
                                icon={item.icon}
                                link={item.txtLink}
                            ></SingleItem>
                        )
                    })
                }
                </div>
                <div>
                {
                    ArrayOfObj.slice(2, 4).map((item)=>{
                        return(
                            <SingleItem 
                                icon={item.icon}
                                link={item.txtLink}
                            ></SingleItem>
                        )
                    })
                }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contentcomponent