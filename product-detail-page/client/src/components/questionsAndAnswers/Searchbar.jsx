import React from 'react';


const Searchbar = () => {

  const handleSearchInput = (e) => {
    console.log(e.target.value);
  }



  return (
    <div>
      <input placeholder='search a question' onChange={(e) => {handleSearchInput(e)}} />
    </div>
  )
}

export default Searchbar