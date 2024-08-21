import './App.css'
import Header from './components/Header/Header'
import SearchBar from './components/SearchBar/SearchBar'
import { createContext, useState } from 'react'


export const ThemeContext = createContext(null)

function App() {
  const [theme, setTheme] = useState('dark')

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <main className={theme+'Main'}>
        <div id='allpageContent'>
          <Header />
          <SearchBar />
        </div>
      </main>
    </ThemeContext.Provider>
  )
}

export default App
