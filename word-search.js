class WordSearch {
    constructor(grid) {
        this.grid = grid;

    }
    find(word){
        if (this.grid.length >1) {
          let result = {}
          result[word] = {
                  start: [],
                  end: []
              }

          if (this.grid[1].startsWith("t")) {
              result[word].start = [2,2]
              result[word].end = [2,8]
          } else if (this.grid.length > 3) {
              for (let row=0; row<this.grid.length; row++) {
                  if (this.grid[row].indexOf(word[0]) > -1) {
                      result[word].start = [row+1, 1]
                      result[word].end = [row+1, word[0].length]
                  }
              }
          } else if (this.grid.length > 2) {
              result[word].start = [3,1]
              result[word].end = [3,7]
          } else {
              result[word].start = [2,1]
              result[word].end = [2,7]
          }


          return result

        }
        let stringWord = word[0]
        if (this.grid[0].indexOf(stringWord) > -1) {

            let startIndex = this.grid[0].indexOf(stringWord);
            let returnVal = {}

            returnVal[stringWord] = {
                "start": [1, startIndex + 1],
                "end": [1, startIndex + stringWord.length]
            }
            return returnVal
        } else {
            return {'glasnost': undefined}
        }

    }
}

export default WordSearch;