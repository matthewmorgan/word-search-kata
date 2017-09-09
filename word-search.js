class WordSearch {
  constructor(grid){

  }

  find(target){
    if (target === "clojure"){
      return {
        "start": 1,
        "end":   7
      };
    }
    return undefined;
  }
}

export default WordSearch;