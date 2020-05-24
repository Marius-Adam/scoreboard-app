import React, { Component } from "react";
import Header from "./Header";
import Player from "./Player";
import AddPlayerForm from "./AddPlayerForm";

class App extends Component {
  state = {
    players: [
      {
        name: "JavaScript",
        score: 0,
        id: 1,
      },
      {
        name: "CSS5",
        score: 0,
        id: 2,
      },
      {
        name: "HTML5",
        score: 0,
        id: 3,
      },
      {
        name: "React",
        score: 0,
        id: 4,
      },
    ],
  };

  //player create ID

  prevPlayerId = 4;

  handleRemovePlayer = (id) => {
    this.setState((prevState) => {
      return {
        players: prevState.players.filter((p) => p.id !== id),
      };
    });
  };

  handleAddPlayer = (name) => {
    if (name === "") {
      alert("Please enter a valid name!");
    } else {
      this.setState((prevState) => {
        return {
          players: [
            ...prevState.players,
            {
              name,
              score: 0,
              id: (this.prevPlayerId += 1),
            },
          ],
        };
      });
    }
  };

  handleChangeScore = (index, delta) => {
    this.setState((prevState) => ({
      score: (prevState.players[index].score += delta),
    }));
  };

  render() {
    return (
      <div className="scoreboard">
        <Header title="Scoreboard" players={this.state.players} />

        {/*Players list*/}
        {this.state.players.map((player, index) => (
          <Player
            key={player.id.toString()}
            name={player.name}
            score={player.score}
            index={index}
            changeScore={this.handleChangeScore}
            removePlayer={this.handleRemovePlayer}
            id={player.id}
          />
        ))}
        <AddPlayerForm addPlayer={this.handleAddPlayer} />
      </div>
    );
  }
}

export default App;
