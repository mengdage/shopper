import React from 'react';
import PropTypes from 'prop-types';
import './Item.css';

function Item({item, onAddToCart}) {
  return (
    <div className='item'>
      <div className='item-left'>
        <div className='item-image'/>
        <div className='item-title'>
          {item.name}
        </div>
        <div className='item-description'>
          {item.description}
        </div>
      </div>
      <div className='item-right'>
        <div className='item-price'>
          ${item.price}
        </div>
        <button
          className='item-addToCart'
          onClick={onAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );

}

Item.propTypes = {
  item: PropTypes.object.isRequired,
  onAddToCart: PropTypes.func.isRequired
};

export default Item;
