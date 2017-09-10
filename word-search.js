class WordSearch {
  constructor(grid) {
    this.grid = grid;
  }

  findStart(target, gridLine){
    if (gridLine === undefined){
      return this.grid.indexOf(target);
    } else {
      return this.grid[gridLine].indexOf(target);
    }
  }

  find(target) {
      if (Array.isArray(this.grid)) {
        let line = 0;
        while (line < this.grid.length){
          if (this.findStart(target, line) !== -1){
            return {
              "start": [line + 1, this.findStart(target, line) + 1],
              "end": [line + 1, this.findStart(target, line) + target.length]
            }
          }
          line++;
        }
        return undefined;
      }

    if (this.findStart(target) === -1){
      return undefined;
    }
    return {
      "start": this.findStart(target) + 1,
      "end": this.findStart(target) + target.length
    }

  }
}

export default WordSearch;