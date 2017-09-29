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
    return this.findOneWord(word, this.grid) || this.flipCoordinates(this.findOneWord(word, this.flip(this.grid)));
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
    let rowIndex = 0;
    let start = undefined;
    let end = undefined;

    function getCoords(startCol) {
      return [[rowIndex + 1, startCol], [rowIndex + 1, startCol + word.length - 1]];
    }

    while (rowIndex < grid.length) {
      let startCol = 1 + grid[rowIndex].indexOf(word);
      if (startCol) {
        [start, end] = getCoords(startCol);
      } else {
        startCol = 1 + grid[rowIndex].indexOf([...word].reverse().join(''));
        if (startCol) {
          [end, start] = getCoords(startCol);
        }
      }
      if (start && end) {
        return {'start': start, 'end': end};
      }
      rowIndex++;
    }
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