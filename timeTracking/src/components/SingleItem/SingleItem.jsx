import './SingleItem.css'
import dots from '../../assets/icon-ellipsis.svg'

function SingleItem(props) {

  return (
    <div className='singleItemDiv'>
      <div className='coloredDiv' style={{backgroundColor:props.thecolor}}>
        <img src={props.theIcon}/>
      </div>

      
      <div className='contentDiv'>
        <div className='top'> 
          <label>{props.theName}</label>
          <img src={dots}/>
        </div>

        <div className='durationDiv'>
          <h1>{props.theDuration}</h1>
          <label>Last Week - <samp>{props.thesince}</samp></label>
        </div>
      </div>
    </div>
  )
}

export default SingleItem
