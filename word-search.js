class WordSearch {
  constructor(grid) {
    this.validateGridDimensions(grid);
    this.grid = grid;
  }

  find(words) {
    return words
        .map(word => ({[word]: this.findWordInSomeDirection(word)}))
        .reduce((acc, oneWord) => Object.assign(acc, oneWord), {});
  }


  findWordInSomeDirection(word) {
    const leftToRight = this.findOneWord(word, this.grid);
    if (leftToRight) {
      return leftToRight;
    }
    let topToBottom = this.findOneWord(word, this.flip(this.grid));
    return this.flipCoordinates(topToBottom);
  }


  flipCoordinates(coords) {
    if (!coords) {
      return undefined;
    }
    return {
      start: coords.start.reverse(),
      end:   coords.end.reverse()
    };
  }

  findOneWord(word, grid) {
    for (let i = 0; i < grid.length; i++) {
      const row = grid[i];
      if (row.indexOf(word) !== -1) {
        const start = row.indexOf(word) + 1;
        const end = start + word.length - 1;
        return {
          start: [i + 1, start],
          end:   [i + 1, end]
        };
      }
    }
    const reversedWord = [...word].reverse().join('');
    for (let i = 0; i < grid.length; i++) {
      const row = grid[i];
      if (row.indexOf(reversedWord) !== -1) {
        const end = row.indexOf(reversedWord) + 1;
        const start = end + word.length - 1;
        return {
          start: [i + 1, start],
          end:   [i + 1, end]
        };
      }
    }
    return undefined;
  }


  flip(grid) {
    const newGrid = [];
    for (let i = 0; i < grid.length; i++) {
      newGrid.push("");
      const oldRow = grid[i];
      for (let j = 0; j < oldRow.length; j++) {
        let newRow = newGrid[i];
        newRow += grid[j].charAt(i);
        newGrid[i] = newRow;
      }
    }
    return newGrid;
  }

  validateGridDimensions(grid) {
    const rowCount = grid.length;
    const invalidRowLengthCount = grid.filter(row => row.length !== rowCount).length;
    if (invalidRowLengthCount) {
      throw new Error("Grid is not square.");
    }
  }
}


module.exports = WordSearch;