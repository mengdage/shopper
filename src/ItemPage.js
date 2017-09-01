import React from 'react';
import PropTypes from 'prop-types';
import './ItemPage.css';

function ItemPage ({items}) {
  return (
    <ul className='itempage-items'>
      {
        items.map(item => (
          <li key={item.id} className='itempage-item'>
            {item.name}
          </li>
        ))
      }
    </ul>
  );
}

ItemPage.propTypes = {
  items: PropTypes.array.isRequired
};

export default ItemPage;
