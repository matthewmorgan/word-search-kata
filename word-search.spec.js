import WordSearch from './word-search';

describe('word search', () => {

  test('can get a square of letters', () => {
    const grid = [
      "cat",
      "dog",
      "sun"
    ];

    const w = new WordSearch(grid);
  });

  test('throws if the grid is not square', () => {
    const grid = [
      "cat",
      "dog"
    ];

    expect(() => new WordSearch(grid)).toThrow(new Error("Grid is not square."));
  });

  test('throws if the grid is otherwise not square', () => {
    const grid = [
      "cat",
      "bat",
      "giraffe"
    ];

    expect(() => new WordSearch(grid)).toThrow(new Error("Grid is not square."));
  });

  test('find method returns the right kind of object', ()=> {
    const grid = [
      "cat",
      "dog",
      "sun"
    ];

    const w = new WordSearch(grid);

    const expected = {
      "bat": undefined
    };

    expect(w.find(["bat"])).toEqual(expected);
  })


});