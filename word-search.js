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
        .map((row, i) => ({row, viewRow: ++i}))
        .filter(r => r.row.indexOf(word) !== -1)
        .map(r => ({
                start: [r.viewRow, r.row.indexOf(word) + 1],
                end: [r.viewRow, word.length + r.row.indexOf(word)]
            })
        )
        .reduce((acc, el) => el, undefined);
}

export default WordSearch;