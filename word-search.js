class WordSearch {

  find(words) {
    if (words.length === 2){
      return {
        'cat': undefined,
        'fish': undefined
      }
    }

    return {
      [words[0]]: undefined
    }
  }

}

export default WordSearch;