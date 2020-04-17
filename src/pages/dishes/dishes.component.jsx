import React from 'react';
import DISHES_DATA from './dishes.data.js';
import DishesPreview from '../../components/dishes-preview/dishes-preview.component';

class DishesPage extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      collections: DISHES_DATA
    };
  }

  render () {
    const { collections } = this.state;
    return (<div className='dishes-page'>
      {
        collections.map(({ id, ...othercollectionProps }) => (
          <DishesPreview key={id} {...othercollectionProps} />
        ))
      }
            </div>);
  }
}

export default DishesPage;
