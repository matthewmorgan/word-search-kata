import WordSearch from './word-search';


describe('single line grids', () => {
  test('Should accept an initial game grid', () => {
    const grid = [""];

    const wordSearch = new WordSearch(grid);

    expect(wordSearch instanceof WordSearch).toEqual(true);
  });
});
