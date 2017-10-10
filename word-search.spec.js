import WordSearch from './word-search';

function assertEquals(expected, found) {
  expect(Object.keys(found).sort()).toEqual(Object.keys(expected).sort());
  expect(found).toEqual(expected);
}

describe('single line grids', () => {
  test('Should accept an initial game grid', () => {
    const grid = [''];

    const wordSearch = new WordSearch(grid);

    expect(wordSearch instanceof WordSearch).toEqual(true);
  });

  test('Should not find the word cat', () => {
    const grid = ['dog'];

    const wordSearch = new WordSearch(grid);

    const found = wordSearch.find(['cat']);

    assertEquals({'cat': undefined}, found)
  });

  test('Should not find cat or fish', () => {
    const grid = ['dog'];

    const wordSearch = new WordSearch(grid);
    const found = wordSearch.find(['cat', 'fish']);

    assertEquals({'cat': undefined, 'fish': undefined}, found);
  });

  test('Should not find a dog', ()=> {
    const grid = ['fish'];


    const wordSearch = new WordSearch(grid);
    const found = wordSearch.find(['dog']);

    assertEquals({'dog': undefined}, found);
  })
});
