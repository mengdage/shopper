import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';
import './CartPage.css';

function CartPage({items, onAddOne, onRemoveOne}) {
  return (
    <ul className='cartpage-items'>
      {items.map( item => (
        <li key={item.id}
        className='cartpage-item'>
          <Item item={item}>
            <div className='carpage-control'>
              <button
                className='cartpage-removeone'
                onClick={()=>onRemoveOne(item)}
              >-</button>
              <span className='cartpage-count'>{item.count}</span>
              <button
                className='cartpage-addone'
                onClick={()=>onAddOne(item)}
              >+</button>
            </div>
          </Item>
        </li>
      ))}
    </ul>
  );
}

CartPage.propTypes = {
  items: PropTypes.array.isRequired,
  onAddOne: PropTypes.func.isRequired,
  onRemoveOne: PropTypes.func.isRequired
};

export default CartPage;
