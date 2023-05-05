import React from 'react';
import Card from './productCard.jsx';

const List =  () => {

  return (
   <div>
    <h4>List Title</h4>
    <div className="related related-container-list">
      <Card/>
      <Card/>
      <Card/>
    </div>
    </div>

  )
}

export default List;