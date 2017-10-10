class WordSearch {
  constructor(grid){
    this.grid = grid;
  }

  find(words) {
    const myIndex = this.grid[0].indexOf(words[0]);
    if (myIndex > -1) {
      return {
        [words[0]]: {
          start: [1, myIndex + 1 ],
          end: [1, words[0].length + myIndex]
        }
      }
    }

    return words.reduce((acc, word) => Object.assign(acc, {[word]: undefined}), {})
  }

}

export default WordSearch;