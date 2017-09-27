class WordSearch {
  constructor(grid) {
    this.validateGridDimensions(grid);
    this.grid = grid;
  }

  find(words) {
    return words
        .map(word => {
          const oneWordResult = this.findOneWord(word);
          return oneWordResult[word] ? oneWordResult : this.findOneWordBackwards(word);
        })
        .reduce((acc, oneWord) => Object.assign(acc, oneWord), {});
  }

  findOneWord(word) {
    const result = {};

    for (let i = 0; i < this.grid.length; i++) {
      const row = this.grid[i];
      if (row.indexOf(word) !== -1) {
        const start = row.indexOf(word) + 1;
        const end = start + word.length - 1;
        result[word] = {
          start: [i + 1, start],
          end:   [i + 1, end]
        };
        return result;
      }
    }
    return result;
  }

  findOneWordBackwards(word) {
    const result = {};
    const reversedWord = [...word].reverse().join('');
    for (let i = 0; i < this.grid.length; i++) {
      const row = this.grid[i];
      if (row.indexOf(reversedWord) !== -1) {
        const end = row.indexOf(reversedWord) + 1;
        const start = end + reversedWord.length - 1;
        result[word] = {
          start: [i + 1, start],
          end:   [i + 1, end]
        };
        return result;
      }
    }
    return result;
  }

  validateGridDimensions(grid) {
    const rowCount = grid.length;
    const invalidRowLengthCount = grid.filter(row => row.length !== rowCount).length;
    if (invalidRowLengthCount) {
      throw new Error("Grid is not square.");
    }
  }
}

export default WordSearch;