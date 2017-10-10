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
  });

  test('Should find a dog', ()=> {
    const grid = ['dog'];


    const wordSearch = new WordSearch(grid);
    const found = wordSearch.find(['dog']);

    assertEquals({'dog': {start:[1,1], end:[1,3]}}, found);
  });

  test('Should find a cat', ()=> {
    const grid = ['cat'];


    const wordSearch = new WordSearch(grid);
    const found = wordSearch.find(['cat']);

    assertEquals({'cat': {start:[1,1], end:[1,3]}}, found);
  })
  test('Should find a fish', ()=> {
    const grid = ['fish'];


    const wordSearch = new WordSearch(grid);
    const found = wordSearch.find(['fish']);

    assertEquals({'fish': {start:[1,1], end:[1,4]}}, found);
  })

  test('Should find a fish', ()=> {
    const grid = ['xfish'];


    const wordSearch = new WordSearch(grid);
    const found = wordSearch.find(['fish']);

    assertEquals({'fish': {start:[1,2], end:[1,5]}}, found);
  })

  test('Should find a dog and a goo', ()=> {
    const grid = ['dogoo'];


    const wordSearch = new WordSearch(grid);
    const found = wordSearch.find(['dog', 'goo']);

    assertEquals({'dog': {start:[1,1], end:[1,3]},'goo': {start:[1,3], end:[1,5]}}, found);
  })

});
