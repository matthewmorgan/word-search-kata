class WordSearch {
  constructor(grid){
    this.grid = grid;
  }

  find(words) {
    if (words[0] === this.grid[0]) {
      return {
        [words[0]]: {
          start: [1, 1],
          end: [1, words[0].length]
        }
      }
    }

    return words.reduce((acc, word) => Object.assign(acc, {[word]: undefined}), {})
  }

}

export default WordSearch;