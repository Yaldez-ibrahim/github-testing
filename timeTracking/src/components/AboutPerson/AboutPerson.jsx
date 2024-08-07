import './AboutPerson.css'
import image from '../../assets/image-jeremy.png'
function AboutPerson() {

  return (
    <div id='aboutpersonDiv'>
        <div id='name_imgDiv'>
            <div id='imgDiv'>
                <img id='theIMG' src={image}/>
            </div>
            <div id='txtDiv'>
                <label>Report for</label>
                <h1>Jeremy Robson</h1>
            </div>
        </div>
        <div id='timesDiv'>
            <label>Daily</label>
            <label id='w'>Weekly</label>
            <label>Monthly</label>
        </div>
    </div>
  )
}

export default AboutPerson