import React, { Component } from 'react';
import Nav from './Nav';
import './App.css';

class App extends Component {
  state = {
    activeTab: 0
  };

  handleTabChange = (index) => {
    this.setState({
      activeTab: index
    });
  }

  renderContent() {
    let content;
    switch (this.state.activeTab) {
      case 0:
        content = <span>Items</span>;
        break;
      case 1:
        content = <span>Cart</span>;
        break;
      default:
        content = <span>Empty</span>;
    }
    return content;
  }

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
