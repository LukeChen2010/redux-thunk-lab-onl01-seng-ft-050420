import React, { Component } from 'react';

class App extends Component {   
  
  render() {
    return (
      <div>
        <h1>CatBook</h1>
        {this.handleLoading()}
      </div>
    );
  }
}

export default App

