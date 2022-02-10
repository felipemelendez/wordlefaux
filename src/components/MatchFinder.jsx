// //<LetterBox state={foo}></LetterBox>
// //
// //</LetterBoxs>


// // states
// //
// - notReadyForInput
// - start herenot- ReadyForInput  -
// first unfilled row// - scoredGreen
// - after scoring// - scoredGray - after scoring
// // - scoredYellow 4

// // notReadyForInput -> readyForInput -> {scoredGreen, scoredGray, scoredYellow}

// // state
// {"0-1": "q"}

// // describe a state where user guessed "robot" as first word
// // state {guessingRow: 1, rows: {0: [{guess: "R", score: "green"}, {guess: "O", score: "yellow"}], 1: [], 2: [], 3: [], 4: [], 5: []}} readyForInput
// 0: ""a, 1: ""o", 1: "ot"//notReadyFoconst MatchFinder = ({rowIndex, inputState, setInputState}) => {
// /notReadyFo
const MatchFinder = ({rowIndex, inputState, setInputState}) => {

  const changeHandler = (e) => {
    // console.log(`Letter: ${e.target.value}, Location: ${e.target.name}`);
    setInputState({
      ...inputState,
      [e.target.name]: e.target.value
    })
  }

  console.log(inputState); // Character location

  return (
    <div>
      {[...Array(5)].map((box, columnIndex) => {
        return (
          <>
          <input
            name={`${rowIndex}-${columnIndex}`} // target name
            type="text" // target value
            maxlength="1"
            size="1"
            onChange={changeHandler} // Sets the state of this tag
          />
        </>
        );
      })}
    </div>
  );
};

export default MatchFinder;
