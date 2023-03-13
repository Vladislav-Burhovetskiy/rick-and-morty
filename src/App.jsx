import React, { useEffect, useState } from 'react'
import Search from './components/Search/Search'
import Cards from './components/Cards/Cards'
import './styles/App.scss'

function App() {

  let [search, setSearch] = useState("");
  let [fetchedData, updateFetchedData] = useState([]);
  let api = `https://rickandmortyapi.com/api/character/?name=${search}`;

  useEffect(() => {
    (async function(){
      let data = await fetch(api).then(res => res.json());
      updateFetchedData(data);
    })()
  }, [api]);

  return (
    <div className="App container">
      <div className="header__banner_image__container">
        <img 
          className="header__banner_image" 
          src="src/image/rickandmorty_banner.png" 
          alt="Rick and Morty banner"
        />
      </div>

      <Search setSearch={setSearch} />
      <Cards results={fetchedData.results}/>
    </div>
  )
}

export default App
