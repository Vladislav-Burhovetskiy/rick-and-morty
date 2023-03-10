import React from 'react'
import '../../styles/components/Search.scss'

const Search = () => {
  return (
    <>
      <div className='search'>
        <input 
          className='search_field'
          type={'text'}
          placeholder='Filter by name...'>
        </input>
        {/* <button>
          <img src="src/image/leading_icon.png" alt="Leading icon" />
        </button> */}
      </div>
    </>
  )
}

export default Search
