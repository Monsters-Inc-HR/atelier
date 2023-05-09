import React, { useState } from 'react';


const Searchbar = ({searchQuery, setSearchQuery}) => {



  //const searchQuestions = (query) => {

  //};

  const handleSearchInput = (e) => {
    if (e.target.value.length >= 3) {
      setSearchQuery(e.target.value);
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