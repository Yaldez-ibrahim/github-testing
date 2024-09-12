import React from 'react'
import "./ContactPage.css"
import photo from "../../../public/img.jpg"
import phone from  "../../../public/phone.png"
import address from  "../../../public/address.png"
import clock from  "../../../public/clock.png"
import {useState } from 'react'
import PartofFooter from '../../components/PartofFooter/PartofFooter'



function ContactPage() {
  const [formData, setFormData] = useState(
    { 
      name :'',
      email :'',
      subject:'',
      message:''
    })

  function HandleOnsubmit(event) {
    event.preventDefault()
    console.log(formData)
  }

  function HandleOnchange(event){
    const value = event.target.value
    const key = event.target.name

    setFormData(prevFormData => ({
      ...prevFormData,
      [key]: value
    }))
  }
  return (
    <>
    <div id='ContactPage'>
        <img src={photo} id='image'/>
        <div id='main-contact'>
          <h1>Get In Touch With Us</h1>
          <p>For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
          <div>
            <div id='left'>
              <div className='about'>
                <img src={address}/>
                <div>
                  <label>Address</label>
                  <p>236 5th SE Avenue, New York NY10000, United States</p>
                </div>
              </div>
              <div className='about'>
                <img src={phone}/>
                <div>
                  <label>Phone</label>
                  <p>Mobile: +(84) 546-6789</p>
                  <p>Hotline: +(84) 456-6789</p>
                </div>
              </div>
              <div className='about'>
                <img src={clock}/>
                <div>
                  <label>Working Time</label>
                  <p>Monday-Friday: 9:00 - 22:00</p>
                  <p>Saturday-Sunday: 9:00 - 21:00</p>
                </div>
              </div>
            </div>
            <form onSubmit={HandleOnsubmit}>
              <label htmlFor='name'>Your name</label>
              <input id='name' name='name' value={formData.name} onChange={HandleOnchange}/>

              <label htmlFor='email'>Email address</label>
              <input id='email' name='email' value={formData.email} onChange={HandleOnchange}/>

              <label htmlFor='subject'>Subject</label>
              <input id='subject' name='subject' value={formData.subject} onChange={HandleOnchange}/>

              <label htmlFor='message'>Message</label>
              <input id='message' name='message' value={formData.message} onChange={HandleOnchange}/>
              
              <button type='submit'>Submit</button>
            </form>
          </div>
        </div>
    </div>
    <PartofFooter></PartofFooter>
    </>
  )
}

export default ContactPage