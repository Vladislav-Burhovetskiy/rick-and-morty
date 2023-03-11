import React from 'react'
import '../../styles/components/Cards.scss'

const Cards = ({ results }) => {
  let displayResult;
if(results) {
  displayResult = results.map( person => {
    let {id, name, image, species} = person;
    return (
      <div className='cards'>
        <div key={id} className='cards__characters'>
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
        </div>
      </div>
    )
  })
} else {
  displayResult = "No characters with this name :/";
}
  return <>{displayResult}</>
}

export default Cards
