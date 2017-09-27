class WordSearch {
  constructor(grid) {
    this.validateGridDimensions(grid);
    this.grid = grid;
  }

  find(words) {
    const word = words[0];
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

  validateGridDimensions(grid) {
    const rowCount = grid.length;
    const invalidRowLengthCount = grid.filter(row => row.length !== rowCount).length;
    if (invalidRowLengthCount) {
      throw new Error("Grid is not square.");
    }
  }
}

export default WordSearch;