import { useState } from 'react';
import './App.css'
import Game from './Game';

function App() {
  const [start, setStart] = useState(false);
  const [result, setResult] = useState('')
  return (
    <div className="App">
      <button style={{visibility: start ? 'hidden' : 'visible'}} onClick={() => setStart(!start)}>Start Game</button>
      {
        start ? <Game setStart={setStart} setResult={setResult}/> : <div></div>
      }
      {
        result? <p>{result}</p>: <span></span>
      }

    </div>

  )
}

export default App
