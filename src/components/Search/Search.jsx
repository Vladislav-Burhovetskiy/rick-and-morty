import React, { useEffect, useState } from 'react'
import './Search.scss'

const Search = ({ setSearch }) => {

  const [inputValues, setInputValues] = useState(() => {
    const savedInputData = localStorage.getItem('charactersName');
    return savedInputData ? JSON.parse(savedInputData) : {name: ""};
  });

  useEffect(() => {
    const savedInputData = localStorage.getItem('charactersName');
    if (savedInputData) {
      setInputValues(JSON.parse(savedInputData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('charactersName', JSON.stringify(inputValues));
  }, [inputValues]);

  return (
    <>
      <div className='search'>
        <input
          name='name'
          onChange={(event) => {
            setSearch(event.target.value);
            setInputValues((prev) => ({
              ...prev,
              [event.target.name]: event.target.value,
            }));
          }}
          className='search_field'
          type='text'
          placeholder='Filter by name...'
          value={inputValues.name}
        >
        </input>
      </div>
    </>
  )
}

export default Search;
