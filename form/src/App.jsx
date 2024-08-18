import './App.css'
import { useState } from 'react'

function App() {
  const [formData, setFormData] = useState({firstName:"",lastName:"",email:""})

  function HandleOnsubmit(event)
  {
    event.preventDefult()
    console.log(formData)
  }

  function HandleOnchange(event){
    const value=event.target.value
    const key = event.target.name

    setFormData(
      ...formData,
      [key]=value
    )
  }
  return (
    <>
      <form onSubmit={HandleOnsubmit}>
        <label htmlFor='First-name'>first name</label>
        <input 
        id='First-name'
        name='firstName'
        value={formData.firstName}
        onChange={HandleOnchange}
        ></input>

        <br></br>

        <label htmlFor='last-name'>last name</label>
        <input 
        id='last-name'
        name='lastName'
        value={formData.lastName}
        onChange={HandleOnchange}
        ></input>

        <br></br>

        <label htmlFor='email'>email</label>
        <input 
        id='email'
        name='email'
        value={formData.email}
        onChange={HandleOnchange}
        ></input>

        <button>submit</button>
      </form>
    </>
  )
}

export default App
