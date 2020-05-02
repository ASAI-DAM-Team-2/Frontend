import React from 'react';

// reactstrap components
import { Container } from 'reactstrap';

// core components

function IndexHeader() {
  return (
    <div>
      <div
        className='page-header section-dark'
        style={{
          backgroundImage:
            'url(' + require('../../assets/img/antoine-barres.jpg') + ')',
        }}
      >
        <div className='filter' />
        <div className='content-center'>
          <Container>
            <div className='title-brand'>
              <h1 className='presentation-title'>Taste it</h1>
              <div className='fog-low'>
                <img alt='...' src={require('../../assets/img/fog-low.png')} />
              </div>
              <div className='fog-low right'>
                <img alt='...' src={require('../../assets/img/fog-low.png')} />
              </div>
            </div>
            <h2 className='presentation-subtitle text-center'>
              Everywhen, everytime
            </h2>
          </Container>
        </div>
        <div
          className='moving-clouds'
          style={{
            backgroundImage:
              'url(' + require('../../assets/img/clouds.png') + ')',
          }}
        />
      </div>
    </div>
  );
}

export default IndexHeader;
