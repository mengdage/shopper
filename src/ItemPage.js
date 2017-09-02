import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';
import './ItemPage.css';


function ItemPage ({items, onAddToCart}) {
  return (
    <ul className='itempage-items'>
      {
        items.map(item => (
          <li key={item.id} className='itempage-item'>
            <Item item={item}
            >
              <button
                onClick={()=>onAddToCart(item)}
                className='item-addToCart'
              >Add To Cart</button>
              </Item>
          </li>
        ))
      }
    </ul>
  );
}

ItemPage.propTypes = {
  items: PropTypes.array.isRequired,
  onAddToCart: PropTypes.func.isRequired
};

export default ItemPage;
