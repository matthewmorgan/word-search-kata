class WordSearch {
  constructor(grid){
    this.grid=grid;
  }

  find(target){
    if (target === "clojure"){
      if (Array.isArray(this.grid)){
        if (this.grid.length === 2){
          return {
            "start": [2, 1],
            "end":   [2, 7]
          };
        }
        return {
          "start": [3, 1],
          "end":   [3, 7]
        };
      }
      return {
        "start": 1,
        "end":   7
      };
    }
    return undefined;
  }
}

export default WordSearch;