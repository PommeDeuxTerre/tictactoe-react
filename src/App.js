import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <TicTacToe />
  );
}

function TicTacToe() {
  return (
    <div id='tictactoe'>
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
    </div>
  );
}

function Square() {
  return (
    <button className='square'>
      x
    </button>
  );
}

export default App;
