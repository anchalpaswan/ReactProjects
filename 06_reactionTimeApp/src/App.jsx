import { useState } from 'react';
import './App.css'
import Game from './Game';

function App() {
  const [start, setStart] = useState(false);
 return (
  <>
    <button onClick={()=> setStart(true)}>Start Game</button>
    {
      start? <Game/>: <div></div>
    }
  </>
    
  )
}

export default App
