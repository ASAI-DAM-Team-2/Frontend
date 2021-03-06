import React from 'react';
import DISHES_DATA from './dishes.data.js';
import DishesPreview from '../../components/dishes-preview/DishesPreview';

class DishesPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: DISHES_DATA,
    };
  }

  render() {
    return <div className='dishes-page'>Dishes</div>;
  }
}

export default DishesPage;
