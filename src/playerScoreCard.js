const playerGuesses = {
  '0-0': 'R',
  '0-1': 'O',
  '0-2': 'B',
  '0-3': 'O',
  '0-4': 'T',
  '1-0': 'M',
  '1-1': 'O',
  '1-2': 'T',
  '1-3': 'O',
  '1-4': 'R',
  '2-0': 'O',
  '2-1': 'O',
  '2-2': 'O',
  '2-3': 'O',
  '2-4': 'O',
  '3-0': 'R',
  '3-1': 'O',
  '3-2': 'T',
  '3-3': 'O',
  '3-4': 'R',
  '4-0': 'M',
  '4-1': 'A',
  '4-2': 'N',
  '4-3': 'G',
  '4-4': 'O',
  '5-0': 'L',
  '5-1': 'O',
  '5-2': 'O',
  '5-3': 'P',
  '5-4': 'S',
};

const formPlayerInput = (inputHash) => {
  const guesses = {
    guess1 : {guess:[], colors: null},
    guess2 : {guess:[], colors: null},
    guess3 : {guess:[], colors: null},
    guess4 : {guess:[], colors: null},
    guess5 : {guess:[], colors: null},
    guess6 : {guess:[], colors: null},
  };

  for (const [row, dash, col] in inputHash) { //destructure keys
    if (row === '0') { guesses.guess1.guess.push(inputHash[row + dash + col])}
    else if (row === '1') { guesses.guess2.guess.push(inputHash[row + dash + col])}
    else if (row === '2') { guesses.guess3.guess.push(inputHash[row + dash + col])}
    else if (row === '3') { guesses.guess4.guess.push(inputHash[row + dash + col])}
    else if (row === '4') { guesses.guess5.guess.push(inputHash[row + dash + col])}
    else (guesses.guess6.guess.push(inputHash[row + dash + col]))
  }
  return guesses;
}
const guesses = formPlayerInput(playerGuesses);
console.log('guesses = ', guesses);


module.exports = { formPlayerInput };