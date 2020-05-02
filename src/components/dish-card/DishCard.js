import React from 'react';
class DishCard extends React.Component {
  // state = {  }
  render() {
    const { title, description, img } = this.props;
    return (
      <div className='card' style={{ width: '18rem' }}>
        <img
          className='card-img-top'
          style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }}
          src={img.src}
          alt='Card image cap'
        />
        <div className='card-body'>
          <h5 className='card-title'>{title}</h5>
          <p className='card-text'>{description}</p>
          <a href='#' className='btn btn-primary'>
            Grab it
          </a>
        </div>
      </div>
    );
  }
}

export default DishCard;
