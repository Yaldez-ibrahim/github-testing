import './Activities.css'
import SingleItem from '../SingleItem/SingleItem'
import { useEffect, useState } from 'react'

function Activities() {
  const [arrOfObj,setArrOfObj]=useState([])

  useEffect(()=>{
    function CallApi(){
      fetch('http://localhost:3000/info')
      .then((response)=>{return response.json()})
      .then((data)=>{ setArrOfObj(data)})
    }
    CallApi()
  },[])
  return (
    <div id='activitiesDiv'>
        <div className='subActivitiesDiv'>
          {
          arrOfObj.slice(0, 3).map((item)=>{
            return(
                  <SingleItem
                    key={item.uniqID}
                    theName={item.theName}
                    theDuration={item.theDuration}
                    thesince={item.thesince}
                    thecolor={item.thecolor}
                    theIcon={item.theIcon}
                  ></SingleItem>
            )
          })
          }
        </div>

        <div className='subActivitiesDiv'>
         {
          arrOfObj.slice(3,6).map((item)=>{
            return(
                  <SingleItem
                    key={item.uniqID}
                    theName={item.theName}
                    theDuration={item.theDuration}
                    thesince={item.thesince}
                    thecolor={item.thecolor}
                    theIcon={item.theIcon}
                  ></SingleItem>
            )
          })
          }
        </div>
    </div>
  )
}

export default Activities