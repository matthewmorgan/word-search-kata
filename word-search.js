class WordSearch {
  constructor(grid){
    const rowCount = grid.length;
    const invalidRowLengthCount = grid.filter(row => row.length !== rowCount).length;
    if (invalidRowLengthCount){
      throw new Error("Grid is not square.");
    }
  }
}

export default WordSearch;