import React from 'react'
import '../../styles/components/Search.scss'

const Search = ({ setSearch }) => {
  return (
    <>
      <div className='search'>
        <input
          onChange={event => {
            setSearch(event.target.value)
          }}
          className='search_field'
          type={'text'}
          placeholder='Filter by name...'>
        </input>
      </div>
    </>
  )
}

export default Search
