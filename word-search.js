class WordSearch {
  constructor(grid) {
    this.grid = grid;
  }


  find(target) {
    const findStart = (target, gridLine) => {
      if (gridLine === undefined) {
        return this.grid.indexOf(target);
      } else {
        return this.grid[gridLine].indexOf(target);
      }
    };

    if (Array.isArray(target)){
      //need to find multiple words
      let results = {};
      for (let word of target){
        let line = 0;
        while (line < this.grid.length) {
          if (findStart(word, line) !== -1) {
            results[word] = {
              "start": [line + 1, findStart(word, line) + 1],
              "end":   [line + 1, findStart(word, line) + word.length]
            }
          }
          line++;
        }
      }
      return results;
    }
    if (Array.isArray(this.grid)) {
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

    if (findStart(target) === -1) {
      return undefined;
    }
    return {
      "start": findStart(target) + 1,
      "end":   findStart(target) + target.length
    }

  }
}

export default WordSearch;