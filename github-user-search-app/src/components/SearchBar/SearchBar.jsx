import React from 'react'
import "./SearchBar.css"
import search from "../../../public/Combined Shape.png"

function SearchBar() {
  return (
    <div id='SearchBar'>
        <img src={search}/>
        <input placeholder='Search GitHub username…' />
        <button>Search</button>
    </div>
  )
}

export default SearchBar