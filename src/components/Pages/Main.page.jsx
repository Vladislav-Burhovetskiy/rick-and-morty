import React, { useEffect, useState } from 'react'
import Search from '../Search/Search'
import Cards from '../Cards/Cards'
import '../../styles/Main.scss'

export const Main = () => {
  const [search, setSearch] = useState(() => {
    const savedSearch = localStorage.getItem('search');
    return savedSearch ? JSON.parse(savedSearch) : '';
  });

  useEffect(() => {
    localStorage.setItem('search', JSON.stringify(search));
  }, [search]);
  
  const [fetchedData, updateFetchedData] = useState([]);
  const api = `https://rickandmortyapi.com/api/character/?name=${search}`;
  
  useEffect(() => {
    (async function(){
      const data = await fetch(api).then(res => res.json());
      data.results.sort((a, b) => a.name.localeCompare(b.name));
      updateFetchedData(data);
    })()
  }, [api]);

  return (
    <div className="container">
      <div className="header__banner_image__container">
        <img 
          className="header__banner_image" 
          src="./image/rickandmorty_banner.png"
          alt="Rick and Morty banner"
        />
      </div>

      <Search setSearch={setSearch} />
      <Cards 
        page="/rick-and-morty/carddetails/"
        results={fetchedData.results}
        search={search}
      />
    </div>
  )
}
