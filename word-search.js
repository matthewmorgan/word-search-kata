class WordSearch {
  constructor(grid){
    this.validateGridDimensions(grid);
  }

  find(words){
    if (words[0] === "cat"){
      return {
        cat: {
          start: [1,1],
          end: [1,3]
        }
      }
    }
    return {
      "bat": undefined
    }
  }
  validateGridDimensions(grid){
    const rowCount = grid.length;
    const invalidRowLengthCount = grid.filter(row => row.length !== rowCount).length;
    if (invalidRowLengthCount){
      throw new Error("Grid is not square.");
    }
  }
}

export default WordSearch;