import React, { useEffect, useState } from 'react'
import Search from './components/Search/Search'
import Cards from './components/Cards/Cards'
import './styles/App.scss'

function App() {
  const [search, setSearch] = useState(() => {
    const savedSearch = localStorage.getItem('search');
    return savedSearch ? JSON.parse(savedSearch) : '';
  });

  useEffect(() => {
    localStorage.setItem('search', JSON.stringify(search));
  }, [search]);
  
  const [fetchedData, updateFetchedData] = useState([]);
  let api = `https://rickandmortyapi.com/api/character/?name=${search}`;
  
  useEffect(() => {
    (async function(){
      let data = await fetch(api).then(res => res.json());
      data.results.sort((a, b) => a.name.localeCompare(b.name));
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
      <Cards results={fetchedData.results} search={search} />
    </div>
  )
}

export default App
