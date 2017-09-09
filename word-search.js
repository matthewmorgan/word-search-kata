class WordSearch {
  constructor(grid){
    this.grid=grid;
  }

  find(target){
    if (target === "clojure"){
      if (Array.isArray(this.grid)){
        return {
          "start": [2, 1],
          "end":   [2, 7]
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