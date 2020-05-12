import React, { Component } from 'react';
import IndexHeader from '../../components/Headers/IndexHeader';

class RestaurantsPage extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <IndexHeader />
        <div className='restaurants-layout'>Hello World!</div>
      </React.Fragment>
    );
  }
}

export default RestaurantsPage;
