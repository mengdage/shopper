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
          </li>
        ))}
        <li className='cartpage-item cartpage-total'>
          Total: ${(items.reduce( (total, item) => total+=item.price*item.count, 0 )).toFixed(2)}
        </li>
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
