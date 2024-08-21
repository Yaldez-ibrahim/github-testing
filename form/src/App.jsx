import './App.css'
import { useState } from 'react'
import * as yup from 'yup';

function App() {
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "" ,age:0})

  const userSchema = yup.object().shape({
    firstName: yup.string().min(4).required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    age:yup.number().positive().integer()
  })

  async function testValidation() {
    try {
      await userSchema.validate(formData, { abortEarly: false });
      console.log("Validation passed");
    } catch (err) {
      if (err instanceof yup.ValidationError) {
        err.inner.forEach((error) => {
          alert(`${error.path}: ${error.message}`);
        });
      }
    }
  }
  function HandleOnsubmit(event)
  {
    event.preventDefault()
    testValidation()
  }

  function HandleOnchange(event) {
    const value = event.target.value
    const key = event.target.name

    setFormData(prevFormData => ({
      ...prevFormData,
      [key]: value
    }))
    if(key == 'age'){
      value =Number(value)
    }
  }
  return (
    <>
      <form onSubmit={HandleOnsubmit}>
        <label htmlFor='First-name'>First Name</label>
        <input
          id='First-name'
          name='firstName'
          value={formData.firstName}
          onChange={HandleOnchange}
        />

        <br />

        <label htmlFor='last-name'>Last Name</label>
        <input
          id='last-name'
          name='lastName'
          value={formData.lastName}
          onChange={HandleOnchange}
        />

        <br />

        <label htmlFor='email'>Email</label>
        <input
          id='email'
          name='email'
          value={formData.email}
          onChange={HandleOnchange}
        />

        <br />

        <label htmlFor='age'>age</label>
        <input
          id='age'
          name='age'
          value={formData.age}
          onChange={HandleOnchange}
        />

        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default App
