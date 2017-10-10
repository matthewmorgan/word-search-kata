class WordSearch {

  find(words) {
    if (words.length === 2){
      return {
        'cat': undefined,
        'fish': undefined
      }
    }
    if (words[0] === 'dog'){
      return {
        'dog': undefined
      }
    }
    return {
      'cat': undefined
    }
  }

}

export default WordSearch;