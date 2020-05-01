import React from 'react';

import DishesItem from '../dishes-item/dishes-item.componnent';

import './dishes-preview.styles.scss';

const DishesPreview = ({ title, items }) => (
  <div className='dishes-preview'>
    <h1>{title.toUpperCase()}</h1>
    <div className='preview'>
      {
        items.map(({ id, ...otherProps }) => (
          <DishesItem key={id} {...otherProps} />
        ))
      }
    </div>
  </div>
);

export default DishesPreview;
