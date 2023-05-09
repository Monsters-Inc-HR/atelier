import React, { useState } from 'react';


const Searchbar = ({searchQuery, setSearchQuery}) => {



  //const searchQuestions = (query) => {

  //};

  const handleSearchInput = (e) => {
    console.log(e.target.value);
    console.log(e.target.value.length);
    if (e.target.value.length >= 3) {
      setSearchQuery(e.target.value);
      console.log('should search for ', searchQuery)

    } else {
      setSearchQuery('');
    }
  };



  return (
    <div>
      <input placeholder='search a question' onChange={(e) => {handleSearchInput(e)}} />
    </div>
  )
}



export default Searchbar