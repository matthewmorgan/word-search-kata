class WordSearch {
  constructor(grid) {
    this.validateGridDimensions(grid);
    this.grid = grid;
  }

  find(words) {
    return words
        .map(word => this.findWordInSomeDirection(word))
        .reduce((acc, oneWord) => Object.assign(acc, oneWord), {});
  }


  findWordInSomeDirection(word) {
    const leftToRight = this.findOneWord(word, this.grid);
    if (leftToRight[word]) {
      return leftToRight;
    }
    const rightToLeft = this.findOneWordBackwards(word, this.grid);
    if (rightToLeft[word]) {
      return rightToLeft;
    }
    let topToBottom = this.findOneWord(word, this.flip(this.grid));
    if (topToBottom[word]) {
      return this.flipCoordinates(topToBottom);
    }
    let bottomToTop = this.findOneWordBackwards(word, this.flip(this.grid));
    return this.flipCoordinates(bottomToTop);
  }


  flipCoordinates(result) {
    return Object.keys(result)
        .filter(word => result[word])
        .map(word => {
          let coords = result[word];
          return {
            [word]: {
              start: coords.start.reverse(),
              end:   coords.end.reverse()
            }
          };
        })
        .reduce((acc, result) => Object.assign(acc, result), {});
  }

  findOneWord(word, grid) {
    for (let i = 0; i < grid.length; i++) {
      const row = grid[i];
      if (row.indexOf(word) !== -1) {
        const start = row.indexOf(word) + 1;
        const end = start + word.length - 1;
        return {
          [word]: {
            start: [i + 1, start],
            end:   [i + 1, end]
          }
        };
      }
    }
    return {};
  }

  findOneWordBackwards(word, grid) {
    const reversedWord = [...word].reverse().join('');
    for (let i = 0; i < grid.length; i++) {
      const row = grid[i];
      if (row.indexOf(reversedWord) !== -1) {
        const end = row.indexOf(reversedWord) + 1;
        const start = end + reversedWord.length - 1;
        return {
          [word]: {
            start: [i + 1, start],
            end:   [i + 1, end]
          }
        };
      }
    }
    return {};
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