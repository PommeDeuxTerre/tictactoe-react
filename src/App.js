import './App.css';
import { useState } from 'react';

function App() {
  return (
    <TicTacToe />
  );
}

function TicTacToe() {
  const [player_turn, setPlayerTurn] = useState(0);
  const [grid, setGrid] = useState(["", "", "", "", "", "", "", "", ""]);

  function squareClick(event){
    const element = event.target;
    if (isWinning() || element.textContent)return;
    element.textContent = getPlayer();

    //get square index
    let index = -1;
    for (let i=0;i<9;i++){
      if (element.parentNode.children[i] == element){
        index = i;
      }
    }

    grid[index] = element.textContent;
    setPlayerTurn(player_turn + 1);
  }

  function isWinning(){
    for (let i=0;i<3;i++){
      //vertical
      if (grid[i]==grid[3+i] && grid[i]==grid[6+i] && grid[i])return grid[i];
      //horizontal
      if (grid[i*3]==grid[1+i*3] && grid[i*3]==grid[2+i*3] && grid[i*3])return grid[i*3];
    }
    //top left -> bottom right
    if (grid[0]==grid[4] && grid[0]==grid[8] && grid[0])return grid[0];
    //top right -> bottom left
    if (grid[2]==grid[4] && grid[2]==grid[6] && grid[2])return grid[2];
    return false;
  }

  function getPlayer(){
    if (player_turn%2){
      return "O";
    }
    return "X"
  }

  return (
    <div id='tictactoe'>
      <Square onClick={squareClick}/>
      <Square onClick={squareClick}/>
      <Square onClick={squareClick}/>
      <Square onClick={squareClick}/>
      <Square onClick={squareClick}/>
      <Square onClick={squareClick}/>
      <Square onClick={squareClick}/>
      <Square onClick={squareClick}/>
      <Square onClick={squareClick}/>
    </div>
  );
}

function Square({onClick}) {
  return (
    <button className='square' onClick={onClick}>
    </button>
  );
}

export default App;
