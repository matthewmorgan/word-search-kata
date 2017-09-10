class WordSearch {
  constructor(grid) {
    this.grid = Array.isArray(grid) ? [...grid] : [grid];
  }

  find(target) {
    //step through each word in target list.  First try to find forward, then try to find backward
    let allWords = Array.isArray(target) ? [...target] : [target];
    return allWords.reduce((result, word) => {
      result[word] = this.findForward(word);
      if (!result[word]) {
        result[word] = this.findBackward(word);
      }
      return result;
    }, {});
  }

  findBackward(target) {
    const findStart = (target, gridLine) => {
      const reversedTarget = [...target].reverse().join('');
      return this.grid[gridLine].indexOf(reversedTarget);
    };

    let line = 0;
    while (line < this.grid.length) {
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

  findForward(target) {
    const findStart = (target, gridLine) => this.grid[gridLine].indexOf(target);

    let line = 0;
    while (line < this.grid.length) {
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


export default WordSearch;