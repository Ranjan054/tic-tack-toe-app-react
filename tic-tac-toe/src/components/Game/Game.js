import React, { Component } from "react";
import "./Game.css"
import Board from "../../containers/Board/Board"

class Game extends Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
        </div>
      );
    }
  }

  export default Game;