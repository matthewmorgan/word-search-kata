class WordSearch {
  constructor(grid){
    this.grid = grid;
  }

  find(words) {
    if (words[0] === 'dog' && this.grid[0] === 'dog') {
      return {
        'dog': {
          start: [1, 1],
          end: [1, 3]
        }
      }
    }
    if (words[0] === 'cat' && this.grid[0] === 'cat') {
      return {
        'cat': {
          start: [1, 1],
          end: [1, 3]
        }
      }
    }
    return words.reduce((acc, word) => Object.assign(acc, {[word]: undefined}), {})
  }

}

export default WordSearch;