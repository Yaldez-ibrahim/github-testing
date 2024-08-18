import React from 'react'
import './Contentcomponent.css'
import SingleItem from '../SingleItem/SingleItem'

import photo from "../../../public/Bitmap.png"
import location from"../../../public/003-pin.svg"
import urlIcon from"../../../public/002-url.png"
import twitter from"../../../public/004-twitter.png"
import office from"../../../public/001-office-building.png"


function Contentcomponent(props) {
    
    const ArrayOfObj=[
        {
            icon: location,
            txtLink: props.location
        },
        {
            icon: urlIcon,
            txtLink: props.url
        },
        {
            icon: twitter,
            txtLink: props.twitter_username
        },
        {
            icon: office,
            txtLink: props.company
        }
    ]
  return (
    <div id='Contentcomponent'>
        <img src={props.avatar_url} id='lift'></img>
        <div id='right'>
            <div id='top'>
                <h1>{props.name} </h1>
                <label>Joined {props.created_at}</label>
            </div>
            <label>@{props.login} </label>
            {
                props.bio === null ? 
                <p>This profile has no bio</p> : 
                <p>{props.bio}</p>
            }
            
            <div id='RFFbar'>
                <div id='repos'>
                    <label>Repos</label>
                    <h3>{props.repos_url}</h3>
                </div>
                <div className='follow'>
                    <label>Followers</label>
                    <h3>{props.followers_url}</h3>
                </div>
                <div className='follow'>
                    <label>Following</label>
                    <h3>{props.following_url}</h3>
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