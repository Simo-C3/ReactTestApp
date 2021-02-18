import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props) {
    return (
    <button className="square" onClick={props.onClick}>
        {props.value}
    </button>
    );
  }
  
  class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
        };
    }

    handleClick(i) {
        const squares = this.state.squares.slice();
        const tani = ['1単位', '2単位', '6単位', '4単位', '10単位', '落単'];
        const tani1 = '不正';
        const tani2 = '退学';
        var l;
        const x = Math.random();
        function choose_at_random(arrayData) {
            var arrayIndex = Math.floor(Math.random() * arrayData.length);
            return arrayData[arrayIndex];
        }
        if (x < 0.9) {
            l = choose_at_random(tani);
        }else if(x < 0.98) {
            l = tani1;
        }else {
            l = tani2;
        }
        squares[i] = l;
        this.setState({squares: squares});
    }

    renderSquare(i) {
      return (
        <Square
          value={this.state.squares[i]}
          onClick={() => this.handleClick(i)}
        />
      );
    }
  
    render() {
      const status = '卒業単位を目指せ！';
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  