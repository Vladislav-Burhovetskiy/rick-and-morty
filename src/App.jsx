import React from 'react'
import Search from './components/Search/Search'
import './styles/App.scss'

function App() {
  return (
    <div className="App container">
      <div className="header__banner_image__container">
        <img 
          className="header__banner_image" 
          src="src/image/rickandmorty_banner.png" 
          alt="Rick and Morty banner"
        />
      </div>

      <Search/>
      <h1>Hello!!!</h1>
    </div>
  )
}

export default App
