import React from 'react';

import MenuItem from '../menu-item/MenuItem';

import './Directory.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'breakfast',
          imageUrl: 'https://i.ibb.co/m5YNydw/breakfast-1804457-1920.jpg',
          id: 1,
          linkUrl: 'meals/hats',
        },
        {
          title: 'Lunch',
          imageUrl: 'https://i.ibb.co/dkV4QDQ/blog-chandigarh-1030x538.jpg',
          id: 2,
          linkUrl: 'meals/lunch',
        },
        {
          title: 'Dinner',
          imageUrl: 'https://i.ibb.co/0jqHpnp/snakers.png',
          id: 3,
          linkUrl: 'meals/dinner',
        },
        {
          title: 'Snack',
          imageUrl: 'https://i.ibb.co/NrwGqNX/dinner.jpg',
          id: 4,
          linkUrl: 'meals/snack',
        },
        {
          title: 'Add On',
          imageUrl: 'https://i.ibb.co/RYnYXrV/addon.jpg',
          id: 5,
          linkUrl: 'meals/addon',
        },
        {
          title: 'Side dish',
          imageUrl: 'https://i.ibb.co/WzQh6gp/sidedish.jpg',
          id: 6,
          linkUrl: 'meals/sidedish',
        },
        {
          title: 'Cakes',
          imageUrl: 'https://i.ibb.co/ZKMLYSp/cakes.jpg',
          size: 'large',
          id: 7,
          linkUrl: 'meals/deserts',
        },
      ],
    };
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
