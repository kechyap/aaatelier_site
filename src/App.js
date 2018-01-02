import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      projects: [
        {
          date: 'februari 2018',
          title: 'Something',
          text: 'I did a lot of cool things for this building',
          color: 'blue',
          url: './images/newThing.png'
        },
        {
          date: 'june 2017',
          title: 'Tego building project',
          text: 'I did a lot of cool things for this building',
          color: 'red',
          url: './images/tego.svg'
        },
        {
          date: 'august 2017',
          title: 'Grill Bag Restaurant',
          text: 'I did branding and stuff for this beautiful restaurant.',
          color: 'pink',
          url: './images/grill.jpg'
        }
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {this.state.projects.map((herring) =>
          <div>
            <img src={herring.url} />
            <h1 style={{color: herring.color}}>
              {herring.title}
             </h1>
            <i>{herring.date}</i>
            <p>{herring.text}</p>
          </div>
        )}
      </div>
    );
  }
}

export default App;
