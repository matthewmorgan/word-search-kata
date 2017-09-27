class WordSearch {
  constructor(grid){
    if (grid[0].length !== grid.length){
      throw Error("Grid is not square");
    }
  }
}

export default WordSearch;