import { useState } from 'react';
import MatchFinder from './components/MatchFinder';

function App() {
  const [inputState, setInputState] = useState({});

  const handleEntry = (e, name) => {
    e.preventDefault();
    console.log("hello " + name + "!");
    console.log(e.target);
  }

  return (
    <div className="container">
      <h1>Welcome to Wordle</h1>
      <div>
        {[...Array(6)].map((row, rowIndex) => {
          return (
            <MatchFinder key={ row } rowIndex={ rowIndex } inputState={ inputState } setInputState={ setInputState } />
          );
        })}
      </div>
      <button onClick={
        (e) => {
          handleEntry(e, 'Felipe');
        }
      }>Submit</button>
    </div>
  );
}

export default App;

