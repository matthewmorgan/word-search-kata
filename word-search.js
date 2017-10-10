class WordSearch {

  find(words) {
    return words.reduce((acc, word) => Object.assign(acc, {[word]:undefined}), {})
  }

}

export default WordSearch;