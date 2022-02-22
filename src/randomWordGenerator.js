const fs = require('fs');

const dictionaryLoader = (filename) => {
  const dictionary = fs
  .readFileSync(filename, 'utf8')
  .split('\n')
  .filter((word) => word.length === 5)

  return dictionary;
}
const wordleWords = dictionaryLoader('fiveLetterWords.txt');
// console.log(wordleWords)

const dictionaryWordShuffler = (wordleDictionary) => {
  const idx = Math.floor(Math.random() * wordleDictionary.length);
  const wordOfTheDay = wordleDictionary[idx];
  return wordOfTheDay;
}
console.log(dictionaryWordShuffler(wordleWords));