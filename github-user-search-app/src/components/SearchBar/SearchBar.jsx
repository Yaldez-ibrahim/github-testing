import "./SearchBar.css"
import search from "../../../public/Combined Shape.png"
import Contentcomponent from '../Contentcomponent/Contentcomponent'

import { useEffect, useState } from 'react'

function SearchBar() {
  const [formData, setFormData] = useState({ searchedUser: "" })
  const [userArray, setUserArray] = useState({})
  const [userName, setUserName] = useState("")

  function HandleOnsubmit(event) {
    event.preventDefault()
    setUserName(formData.searchedUser)
  }

  function HandleOnchange(event) {
    const value = event.target.value
    const key = event.target.name

    setFormData(prevFormData => ({
      ...prevFormData,
      [key]: value
    }))
  }

  useEffect(() => {
    if (userName) {
      function CallApi(userName) {
        fetch(`https://api.github.com/users/${userName}`)
          .then((response) => response.json())
          .then((data) => { setUserArray(data) })
          .catch((error) => console.error("Error fetching data: ", error))
      }
      CallApi(userName)
    }
  }, [userName])

  return (
    <>
      <form onSubmit={HandleOnsubmit} id='SearchBar'>
        <img src={search} alt="Search Icon" />

        <input
          placeholder='Search GitHub username…'
          id='searchedUser'
          name='searchedUser'
          value={formData.searchedUser}
          onChange={HandleOnchange}
        />
        <button type="submit">Search</button>
      </form>
      <Contentcomponent
        avatar_url={userArray.avatar_url}
        name={userArray.name}
        created_at={userArray.created_at}
        login={userArray.login}
        bio={userArray.bio}
        repos_url={userArray.public_repos}
        followers_url={userArray.followers}
        following_url={userArray.following}
        location={userArray.location}
        url={userArray.html_url}
        twitter_username={userArray.twitter_username}
        company={userArray.company}
      />
    </>
  )
}

export default SearchBar
