import React from 'react'
import './Cards.scss'
import { NavLink } from 'react-router-dom';

const Cards = ({ results, search, page }) => {
  let displayResult;

  if(results) {
    const filteredResults = results.filter(person => person.name.toLowerCase().includes(search.toLowerCase()));

    displayResult = filteredResults.length ? filteredResults.map(person => {
      const { id, name, image, species } = person;
      return (
        
        <NavLink 
          to={`${page}${id}`}
          key={id}
          className='cards__characters'
        >
          <div className='cards__characters__image_container'>
            <img 
              src={image} 
              alt={name} 
              className='cards__characters__image'
            />  
          </div>
          <div className='cards__characters__info'>
            <h3 className='cards__characters__info_name'>{name}</h3>
            <p className='cards__characters__info_species'>{species}</p>
          </div>
        </NavLink>
        
      )
    }) : <div className='cards__characters_notfind'>No characters with this name :/</div>
  } 

  return <div className='cards'>{displayResult}</div>
}

export default Cards
