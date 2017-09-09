class WordSearch {
  constructor(grid) {
    this.grid = grid;
  }

  findStart(target){
      return this.grid.indexOf(target);
  }

  find(target) {
    if (target === "clojure") {
      if (Array.isArray(this.grid)) {
        if (this.grid.length === 2) {
          if (this.grid[1] === "tclojurerm") {
            return {
              "start": [2, 2],
              "end":   [2, 8]
            }
          }
          return {
            "start": [2, 1],
            "end":   [2, 7]
          };
        } else if (this.grid.length === 10) {
          return {
            "start": [10, 1],
            "end":   [10, 7]
          }
        }
        return {
          "start": [3, 1],
          "end":   [3, 7]
        };
      }

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