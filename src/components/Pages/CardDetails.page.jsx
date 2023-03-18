import React, { useState, useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import "./CardDetails.page.scss"

export const CardDetails = () => {
  const {id} = useParams();
  const [fetchedData, updateFetchedData] = useState([]);
  const {image, name, gender, status, species, origin, type} = fetchedData;
  
  const api = `https://rickandmortyapi.com/api/character/${id}`;
  
  useEffect(() => {
    (async function(){
      let data = await fetch(api).then(res => res.json());
      updateFetchedData(data);
    })()
  }, [api]);
  
  return (
    <>
      <div className='container__card_details'>
        <dir className='card_details'>
          <div className='card_details__link_container'>
            <NavLink className='card_details__link' to={"/rick-and-morty/"}>
              <img 
                className='card_details__link_image'
                src='./src/image/arrow_back_24px.png'
                alt="Arrow back"
              />
              GO BACK
            </NavLink>
          </div>
          <div className='card_details__image_container'>
            <img
              className='card_details__image'
              src={image}
              alt={`Image ${name}`}
            />
          </div>
          <h1 className='card_details__name'>{name}</h1>
          <h2 className="card_details__informations">Informations</h2>
          <div className="card_details__info">
            <div className='card_details__info_states' >
              <h3 className='card_details__info_states_title'>Gender</h3>
              <span className='card_details__info_states_name'>{gender}</span>
            </div>
            <hr className="card_details__info_divider" />
            <div className='card_details__info_states' >
              <h3 className='card_details__info_states_title'>Status</h3>
              <span className='card_details__info_states_name'>{status}</span>
            </div>
            <hr className="card_details__info_divider" />
            <div className='card_details__info_states' >
              <h3 className='card_details__info_states_title'>Specie</h3>
              <span className='card_details__info_states_name'>{species}</span>
            </div>
            <hr className="card_details__info_divider" />
            <div className='card_details__info_states' >
              <h3 className='card_details__info_states_title'>Origin</h3>
              <span className='card_details__info_states_name'>{origin?.name}</span>
            </div>
            <hr className="card_details__info_divider" />
            <div className='card_details__info_states' >
              <h3 className='card_details__info_states_title'>Type</h3>
              <span className='card_details__info_states_name'>{type === "" ? "Unknown" : `${type}`}</span>
            </div>
            <hr className="card_details__info_divider" />
          </div>

          
        </dir>
      </div>
    </>
  )
}


