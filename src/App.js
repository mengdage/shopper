import React, { Component } from 'react';
import Nav from './Nav';
import './App.css';
import ItemPage from './ItemPage';
import CartPage from './CartPage';
import {items} from './static-data';

class App extends Component {
  state = {
    activeTab: 0,
    cart: []
  };

  handleTabChange = (index) => {
    this.setState({
      activeTab: index

    });
  }

  handleAddToCart = (item) => {
    this.setState({
      cart: [...this.state.cart, item.id]
    });
  }

  handleRemoveToCart = (item) => {
    let newCart = this.state.cart.slice(0);
    let idx = newCart.indexOf(item.id);
    if(idx !== -1) {
      newCart.splice(idx, 1);
      this.setState({
        cart: newCart
      });
    }
  }

  renderContent = () => {
    let content;
    switch (this.state.activeTab) {
      case 0:
        content = <ItemPage
          items={items}
          onAddToCart={this.handleAddToCart} />;
        break;
      case 1:
        content = this.renderCartPage();
        break;
      default:
        content = <span>Empty</span>;
    }
    return content;
  };

  renderCartPage= () =>{
    // Count how many of each items is in the cart
    let itemCounts = this.state.cart.reduce((itemCounts, itemId) => {
      itemCounts[itemId] = itemCounts[itemId] || 0;
      itemCounts[itemId] ++;
      return itemCounts;
    }, {});

    // Create an array of items
    let cartItems = Object.keys(itemCounts).map(itemId => {
      // Find the item by its id
      let item = items.find( item => item.id === parseInt(itemId, 10));
      return {
        ...item,
        count: itemCounts[itemId]
      };
    });

    return (
      <CartPage items={cartItems}
        onAddOne={this.handleAddToCart}
        onRemoveOne={this.handleRemoveToCart}
      />
    );
  };

  render() {
    const {activeTab} = this.state;
    return (
      <div className="App">
        <Nav activeTab={activeTab}
          onTabChange={this.handleTabChange}
        />
        <main className="App-content">
          {this.renderContent()}
        </main>
      </div>
    );
  }
}

export default App;
