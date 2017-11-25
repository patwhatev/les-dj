import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Deck from './Deck';
import Playlist from './Playlist';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">LESDJ</h1>
        </header>
        <Deck class="Deck DeckA" title="DeckA"/>
        <Deck class="Deck DeckB" title="DeckB"/>
        <Playlist />
      </div>
    );
  }
}

export default App;
