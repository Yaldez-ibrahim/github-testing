import React from 'react'
import './Header.css'
import lightIcon from '../../../public/002-sun.svg'
import darkIcon from '../../../public/moon.svg'
import { ThemeContext } from '../../App'
import { useContext } from 'react'

function Header() {
    const { theme, setTheme } = useContext(ThemeContext)

    function onHandleChange() {
        const newValue = theme === 'light' ? 'dark' : 'light'
        setTheme(newValue)
    }

    return (
        <div id='header'>
            <h1 className={theme+'devfinder'}>devfinder</h1>
            <div id='toggleMode' onClick={onHandleChange}>
                <label className={theme+'Mode'}>{theme === 'light' ? 'DARK' : 'LIGHT'}</label>
                <img src={theme === 'light' ? darkIcon : lightIcon} alt="Theme Icon"/>
                <input 
                    type='checkbox' 
                    onChange={onHandleChange} 
                    checked={theme === 'dark'} 
                />
            </div>
        </div>
    )
}

export default Header
