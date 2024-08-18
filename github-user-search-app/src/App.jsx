import './App.css'
import Contentcomponent from './components/Contentcomponent/Contentcomponent'
import Header from './components/Header/Header'
import SearchBar from './components/SearchBar/SearchBar'
import { createContext,useState } from 'react'

export const ThemeContext = createContext(null)

function App() {
  const [theme, setTheme]=useState('light')

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <main className='DLMain'>
      <div id='allpageContent'>
        <Header></Header>
        <SearchBar></SearchBar>
      </div>
    </main>
    </ThemeContext.Provider>
    
  )
}

export default App
