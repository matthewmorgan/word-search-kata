class WordSearch {
  constructor(grid) {
    this.grid = Array.isArray(grid) ? [...grid] : [grid];
  }

  find(target) {
    let allWords = Array.isArray(target) ? [...target] : [target];
    return allWords.reduce((result, word) => {
      result[word] =
             this.findForward(word, this.grid)
          || this.findBackward(word, this.grid)
          || this.findTopToBottom(word, rotateLeft(this.grid));
      return result;
    }, {});
  }

  findTopToBottom(target, grid) {
    const verticalResults = this.findForward(target, grid) || this.findBackward(target, grid);
    const arg = {};
    arg[target] = verticalResults;
    return transformCoordinates(arg, grid[0].length)[target];
  }

  findBackward(target, grid) {
    const findStart = (target, gridLine) => {
      const reversedTarget = [...target].reverse().join('');
      return grid[gridLine].indexOf(reversedTarget);
    };

    let line = 0;
    while (line < grid.length) {
      if (findStart(target, line) !== -1) {
        return {
          "start": [line + 1, findStart(target, line) + target.length],
          "end":   [line + 1, findStart(target, line) + 1]
        }
      }
      line++;
    }

    return undefined;
  }

  findForward(target, grid) {
    const findStart = (target, gridLine) => grid[gridLine].indexOf(target);

    let line = 0;
    while (line < grid.length) {
      if (findStart(target, line) !== -1) {
        return {
          "start": [line + 1, findStart(target, line) + 1],
          "end":   [line + 1, findStart(target, line) + target.length]
        }
      }
      line++;
    }
    return undefined;
  }
}

function transformCoordinates(results = [], gridWidth) {
  const transformed = Object.keys(results)
      .filter(word => results[word])
      .reduce((transformed, word) => {
        transformed[word] = {
          "start": transformPoint(results[word]['start'], gridWidth),
          "end":   transformPoint(results[word]['end'], gridWidth)
        };
        return transformed;
      }, {});
  return transformed;
}

function transformPoint(point, gridWidth) {
  return [point[1], gridWidth + 1 - point[0]];
}

function rotateLeft(inGrid) {
  const grid = [];

  for (let c = inGrid.length - 1; c >= 0; c--) {
    let newRow = "";
    for (let r = 0; r < inGrid.length; r++) {
      newRow += inGrid[r].charAt(c);
    }
    grid[inGrid.length - 1 - c] = newRow;
  }

  return grid;
}

export default WordSearch;