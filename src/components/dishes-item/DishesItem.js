import React from 'react';

import './DishesItem.scss';

const DishesItem = ({ id, name, price, imageUrl }) => (
  <div className='dishes-item'>
    <div
      className='image'
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className='dishes-footer'>
      <span className='name'>{name}</span>
      <span className='price'>{price}</span>
    </div>
  </div>
);

export default DishesItem;
