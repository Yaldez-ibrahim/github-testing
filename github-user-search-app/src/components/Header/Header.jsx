import React from 'react'
import './Header.css'
import light from '../../../public/002-sun.svg'
import dark from '../../../public/moon.svg'
import { ThemeContext } from '../../App'
import { useContext } from 'react'

function Header() {
    const theme =useContext(ThemeContext)

    function onHandleChange(event){
        let newValue
        if(event.target.checked == false){
            newValue='light'
        }else if(event.target.checked == true){
            newValue='dark'
        }
        theme.setTheme(newValue)
    }
  return (
    <div id='header'>
        <h1>devfinder</h1>
        <div id='toggleMode' >
            <label>{theme.theme}</label>
            <img src={theme.theme}/>
            <input type='checkbox' onChange={onHandleChange}/>
        </div>
    </div>
  )
}

export default Header