class WordSearch {
  constructor(grid){
    this.grid = grid;
  }

  find(words) {
    return words.reduce((acc, word) => Object.assign(acc, findOneWord(word, this.grid)), {})
  }
}

function findOneWord(word, grid){
  const myIndex = grid[0].indexOf(word);
  if (myIndex > -1) {
    return {
      [word]: {
        start: [1, myIndex + 1 ],
        end: [1, word.length + myIndex]
      }
    }
  }
  return {[word]: undefined};
}
export default WordSearch;