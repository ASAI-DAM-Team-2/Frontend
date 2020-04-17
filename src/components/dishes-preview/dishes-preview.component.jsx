import React from 'react';
import './dishes-preview.styles.scss';

const DishesPreview = ({ title, items }) => (
  <div className='dishes-preview'>
    <h1>{title.toUpperCase()}</h1>
    <div className='preview'>
      {
        items.map(item => (
          <div key={item.id}>{item.name}</div>
        ))
      }
    </div>
  </div>
);

export default DishesPreview;
