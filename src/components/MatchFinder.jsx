import { useEffect } from "react";
import { formPlayerInput } from "../playerScoreCard";

const MatchFinder = ({
  rowIndex,
  inputState,
  setInputState,
  playerGuesses,
  setPlayerGuesses,
  lastRow,
  setLastRow,
}) => {
  // form playerGuesses object using JS file, which via useEffect runs every time there's a rerender
  useEffect(() => {
    const guesses = formPlayerInput(inputState);
    const key = `guess${lastRow + 1}`;
    setPlayerGuesses({
      ...playerGuesses,
      // [key]: {
      //   ...guesses[key],
      // },
      [key]: guesses[key], // which one is better?
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputState, lastRow]); // currently rerenders when inputState changes, but want to rerender when button is clicked
  // console.log('player Guesses: ', playerGuesses)

  const changeHandler = (e, rowIndex) => {
    // console.log('target name: ', e.target.name, 'target value: ', e.target.value)
    setInputState({
      ...inputState,
      [e.target.name]: e.target.value,
    });
    setLastRow(rowIndex); // keeps track of the last row changed, might need this to store past guesses
  };
  console.log("input state: ", inputState);

  return (
    <div>
      {[...Array(5)].map((column, columnIndex) => {
        return (
          <input
            style={{
              backgroundColor: playerGuesses[`guess${rowIndex + 1}`]?.colors // does the color property exist? if true : if false
                ? playerGuesses[`guess${rowIndex + 1}`].colors[columnIndex]
                : "#D8E1E7",
            }}
            key={`${rowIndex}-${columnIndex}`}
            name={`${rowIndex}-${columnIndex}`} // target name
            type="text"
            maxLength="1"
            size="1"
            onChange={(e) => {
              changeHandler(e, rowIndex);
            }} // Sets the state of this tag
          />
        );
      })}
    </div>
  );
};

export default MatchFinder;
