import React, { Component } from 'react';
import Main from "./pages/main/main"
import Header from "./component/header/header"
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
