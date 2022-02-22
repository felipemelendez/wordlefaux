import { useState } from "react";
import MatchFinder from "./components/MatchFinder";
import { scorePlayersGuess } from "./wordMatch";
// import { wordOfTheDay } from './randomWordGenerator';

function App() {
  const [inputState, setInputState] = useState({});
  const [playerGuesses, setPlayerGuesses] = useState({});
  const [lastRow, setLastRow] = useState(0);

  const handleEntry = (e) => {
    e.preventDefault(); // IS THIS NECESSARY, IF SO WHY?
    const key = `guess${lastRow + 1}`;
    const guess = playerGuesses[key].guess.join("").toUpperCase();
    setPlayerGuesses({
      ...playerGuesses,
      [key]: {
        ...playerGuesses[key],
        colors: [...scorePlayersGuess(guess, "MOTOR")],
      },
    });
  };
  // console.log(playerGuesses);

  return (
    <div className="container">
      <header>Welcome to My Wordle</header>
      <div>
        {[...Array(6)].map((row, rowIndex) => {
          return (
            <MatchFinder
              key={row}
              rowIndex={rowIndex}
              inputState={inputState}
              setInputState={setInputState}
              playerGuesses={playerGuesses}
              setPlayerGuesses={setPlayerGuesses}
              lastRow={lastRow}
              setLastRow={setLastRow}
            />
          );
        })}
      </div>
      <button
        onClick={(e) => {
          handleEntry(e);
        }}
      >
        Submit
      </button>
    </div>
  );
}

export default App;