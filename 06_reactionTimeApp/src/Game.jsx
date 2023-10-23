/* eslint-disable react/prop-types */
import { useState, useEffect} from 'react';

export default function Game({ setStart, setResult }) {
    const [redIsVisible, setRedIsVisible] = useState(true);
    const [greenIsVisible, setGreenIsVisible] = useState(false);
    const [spawnTime, setSpawnTime] = useState(null);
  

 
    useEffect(() => {
        setResult('');
      
        const timeoutId = setTimeout(() => {
          setRedIsVisible(false);
          setGreenIsVisible(true);
          setSpawnTime(Date.now());
        }, Math.random() * 5000 + 1000);
      
        return () => {
          clearTimeout(timeoutId);
        };
      }, []);
      

    const showResult = (tooEarly) => {
        setStart(false)
        if (tooEarly) {
            setResult(`You Clicked too early`)
        } else{
            setResult(`You took ${ Date.now() - spawnTime}ms`)
            setSpawnTime(null);
        }
    }

    return (
        <>
            {
                redIsVisible ? <div onClick={() => showResult(true)} className="Red">

                </div> : <div className="Green" onClick={() => showResult(false)}></div>
            }
           

        </>
    )
}