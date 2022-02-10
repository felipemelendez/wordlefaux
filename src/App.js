import React, { useState } from 'react';
import MatchFinder from './components/MatchFinder';
import './styles.css';

function App() {
  const [inputState, setInputState] = useState({})

  const handleEntry = (e) => {

  }

  return (
    <div className="container">
      <h1>Wordle</h1>
      <div>
        {[...Array(6)].map((row, idx) => {
          return (
            <MatchFinder key={row} rowIndex={idx} inputState={inputState} setInputState={setInputState} />
          );
        })}
      </div>
      <button onClick={handleEntry}>Enter</button>
    </div>
  );
}

export default App;

