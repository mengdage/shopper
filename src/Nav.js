import React from 'react';

function Nav (props) {
  const {activeTab, onTabChange} = props;

  return (
    <nav className='App-nav'>
      <ul>
        <li className={`App-nav-item ${activeTab===0? 'selected':''}`}><a onClick={()=>onTabChange(0)}>Items</a></li>
        <li className={'App-nav-item' + (activeTab===1? ' selected':'')}><a onClick={()=>onTabChange(1)}>Cart</a></li>
      </ul>
    </nav>
  );
}

export default Nav;
