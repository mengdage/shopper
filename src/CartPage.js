import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';
import './CartPage.css';

function CartPage({items, onAddOne, onRemoveOne}) {
  const len = items.length;
  return (
    (len> 0) ? (
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
            <div>
              Total: $2032
            </div>
          </li>
        ))}
      </ul>
    ) : (
      <div className='cartpage-empty'>
        <p>You cart is empty.</p>
        <p>Why not adding some products?</p>
      </div>
    )
  );
}

CartPage.propTypes = {
  items: PropTypes.array.isRequired,
  onAddOne: PropTypes.func.isRequired,
  onRemoveOne: PropTypes.func.isRequired
};

export default CartPage;
