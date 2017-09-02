import React from 'react';
import PropTypes from 'prop-types';

function Nav (props) {
  const {activeTab, onTabChange, items} = props;
  let itemCount = 0, itemTotal = 0;
  items.forEach( item => {
    itemCount += item.count;
    itemTotal += item.price * item.count;
  });

  return (
    <nav className='App-nav'>
      <ul>
        <li className={`App-nav-item ${activeTab===0? 'selected':''}`}><a onClick={()=>onTabChange(0)}>Items</a></li>
        <li className={'App-nav-item' + (activeTab===1? ' selected':'')}><a onClick={()=>onTabChange(1)}>Cart</a></li>
      </ul>
      <div className='App-nav-summary' onClick={()=>onTabChange(1)}>

        <span >
          <i className="fa fa-shopping-cart" aria-hidden="true" />
          {' '}{itemCount}
          {' '}
          {itemCount === 1 ? 'item': 'items'}
        </span>
        {itemTotal>0 && <span> (${itemTotal.toFixed(2)}) </span>}

      </div>
    </nav>
  );
}

Nav.propTypes = {
  activeTab: PropTypes.number.isRequired,
  onTabChange: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired
};

export default Nav;
