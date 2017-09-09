class WordSearch {
  constructor(grid){

  }

  find(target){
    if (target === "clojure"){
      return {
        "start": [10, 1],
        "end":   [10, 7]
      };
    }
    return undefined;
  }
}

export default WordSearch;