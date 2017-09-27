class WordSearch {
  constructor(grid){
    this.validateGridDimensions(grid);
  }

  validateGridDimensions(grid){
    const rowCount = grid.length;
    const invalidRowLengthCount = grid.filter(row => row.length !== rowCount).length;
    console.log(invalidRowLengthCount);
    if (invalidRowLengthCount){
      throw new Error("Grid is not square.");
    }
  }
}

export default WordSearch;