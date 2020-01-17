import React from 'react';
import axios from 'axios';
import './App.css';

import PlayerList from './components/PlayerList';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      players: []
    }
  }
  componentDidMount() {
    axios
      .get('http://localhost:5000/api/players')
      .then(response => {this.setState({ players: response.data });})
      .catch(error => console.log(error))

    
  }
  render() {
    return (
      <div>
        <h1>Women's World Cup</h1>
        <PlayerList players={this.state.players} />
      </div>
    )
  }
}

export default App;
