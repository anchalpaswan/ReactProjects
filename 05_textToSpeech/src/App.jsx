import { useState, useEffect } from "react";
import axios from 'axios';

function App() {
  const [quote, setQuote] = useState("");
  const [speechRate, setSpeechRate] = useState(1);
  const [refresh, setRefresh] = useState(false);
  const speech = new SpeechSynthesisUtterance();
  const quoteURL = 'https://api.quotable.io/random';

  useEffect(() => {
    axios
      .get(quoteURL)
      .then((res) => {
        const data = res.data;
        setQuote(data.content);
      });
  }, [refresh]);

  const speechHandler = (word) => {
    speech.text = word;
    speech.rate = parseFloat(speechRate); // Set the speech rate
    window.speechSynthesis.speak(speech);
  }

  const stopSpeechHandler = () => {
    window.speechSynthesis.cancel();
  }

  const quoteHandler = () => {
    setRefresh(!refresh);
  }
  

  return (
    <div className='App'>
      <button onClick={quoteHandler}>Generate Quote</button>
   
      <div className="quote">
        {quote.split(" ").map((word, i) => {
          return <span key={i} onClick={() => speechHandler(word)}>{word} </span>
        })}
      </div>
      <button onClick={() => speechHandler(quote)}>SPEAK</button>
      <button onClick={stopSpeechHandler}>STOP</button>
      <select onChange={(e) => setSpeechRate(+e.target.value)}>
        <option value="0.2">0.2x</option>
        <option value="0.4">0.4x</option>
        <option value="0.5">0.5x</option>
        <option value="1" >Normal</option>
      </select>
    </div>
  );
}

export default App;
