import React from 'react';
import './App.css';
import {Header} from './components/Header';
import {Player} from './components/Player';

class App extends React.Component {
  state = {
    players: [
      {name: 'LDK', score: 5, id: 1},
      {name: 'HONG', score: 6, id: 2},
      {name: 'LEE', score: 7, id: 3},
      {name: 'PARK', score: 8, id: 4}
    ]
  }

  handleRemovePlayer = (id) => {
    console.log('handleRemove: ', id);
    //해당되는 id를 삭제
    this.setState(prevState => {
      const players = prevState.players.filter(item => item.id !== id);
      return { players: players}
    })
  }

  handleChangeScore = (id, delta) => {
    console.log('handleChangeScore: ', id, delta);
    this.setState(prevState => {
      const players = [ ...prevState.players ]; // deep copy
      players.forEach(item=> {
        if (item.id === id) {
          item.score += delta;
        }
      });
      return { players: players}
    })
  }

  render() {
    return (
      <div className="scoreboard">
        <Header title="My Scoreboard" totalPlayers={11}/>
        {
          this.state.players.map((item) => (
              <Player id={item.id} name={item.name} score={item.score} key={item.id}
                      removePlayer={this.handleRemovePlayer} changeScore={this.handleChangeScore}></Player>
            )
          )
        }
      </div>
    )
  }
}

export default App;
