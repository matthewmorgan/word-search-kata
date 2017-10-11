class WordSearch {
    constructor(grid) {
        this.grid = grid;
    }

    find(words) {
        return words.reduce((acc, word) => Object.assign(acc, {[word]: findOneWord(word, this.grid)}), {})
    }
}

function findOneWord(word, grid) {
    return grid
        .filter(r => r.indexOf(word) !== -1)
        .map(r => ({
                start: [grid.indexOf(r)+1, r.indexOf(word) + 1],
                end: [grid.indexOf(r)+1, word.length + r.indexOf(word)]
            })
        )
        .reduce((acc, el) => el, undefined);
}

export default WordSearch;