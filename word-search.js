class WordSearch {
  constructor(grid) {
    this.grid = grid;
  }

  find(words) {
    return words.reduce((acc, word) => Object.assign(acc, findOneWord(word, this.grid)), {})
  }
}

function findOneWord(word, grid) {
  for (let i = 0; i < grid.length; i++) {
    let row = grid[i];
    let myIndex = row.indexOf(word);
    if (myIndex > -1) {
      return {
        [word]: {
          start: [i + 1, myIndex + 1],
          end: [i + 1, word.length + myIndex]
        }
      }
    }
  }

  return {[word]: undefined};
}
export default WordSearch;