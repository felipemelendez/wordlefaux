// global variables
// const yellow = "#FFDB15";
// const green = "#0A7029";
// const black = "#3B0918";


// Time complexity: O(n)
// Space complexity: O(1), fixed number of potential hash keys
const createHashOfWordle = (wordToHash) => {
  const inputHash = {};
  wordToHash.split('').forEach((letter, i) => {
    inputHash[wordToHash[i]] === undefined
      ? inputHash[wordToHash[i]] = 1
      : inputHash[wordToHash[i]]++;
  });
  return inputHash;
}
// console.log(createHashOfWordle('ROTOR'))

// Time complexity: O(n), split method has to iterate
// Space complexity: O(n), length of word and wordle
const createScorecard = (playerInput, wordle) => {
  return {
    playerInput: playerInput.split(''),
    wordle,
    hashOfWordle: createHashOfWordle(wordle),
    score: new Array(5)
  };
}

/* --- Functional ---- */

// Time complexity: O(n)
// Space complexity: O(1)
const findGreens = (scorecard) => {
  scorecard.playerInput.forEach((letter, idx) => {
    if (scorecard.wordle[idx] === scorecard.playerInput[idx]) {
      scorecard.score[idx] = green;
      scorecard.hashOfWordle[letter]--;
    }
  })
  return scorecard;
}

// Time complexity: O(n)
// Space complexity: O(1)
const findYellows = (scorecard) => {
  scorecard.playerInput.forEach((letter, idx) => {
    if (scorecard.wordle.includes(letter) && scorecard.hashOfWordle[letter] > 0) {
      scorecard.score[idx] = yellow;
      scorecard.hashOfWordle[letter]--;
    }
  })
  return scorecard;
}

// Time complexity: O(n)
// Space complexity: O(1)
const findBlacks = (scorecard) => {
  scorecard.playerInput.forEach((letter, idx) => {
    if (scorecard.wordle[idx] !== scorecard.playerInput[idx] && scorecard.score[idx] === undefined) {
      scorecard.score[idx] = black
    }
  })
  return scorecard.score;
}

// Time complexity: O(n)
// Space complexity: O(n)
// Input - string
// Output - array of colors
const scorePlayersGuess = (playerInput, wordle) => {
  const scorecard = createScorecard(playerInput, wordle)
  const results = findBlacks(findYellows(findGreens(scorecard)));
  return results;
}
// console.log(scorePlayersGuess('TOBOU', 'ROBOT'));

module.exports = { scorePlayersGuess };

