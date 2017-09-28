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

  test('find method returns the right kind of object', () => {
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
  });

  test('find can find a word', () => {
    const grid = [
      "cat",
      "dog",
      "sun"
    ];

    const w = new WordSearch(grid);

    const expected = {
      cat: {
        start: [1, 1],
        end:   [1, 3]
      }
    };

    expect(w.find(["cat"])).toEqual(expected);
  });

  test('find can find a different word', () => {
    const grid = [
      "cat",
      "dog",
      "sun"
    ];

    const w = new WordSearch(grid);

    const expected = {
      dog: {
        start: [2, 1],
        end:   [2, 3]
      }
    };

    expect(w.find(["dog"])).toEqual(expected);
  });

  test('find can find a different word in a different position', () => {
    const grid = [
      "catf",
      "bdog",
      "suno",
      "fish"
    ];

    const w = new WordSearch(grid);

    const expected = {
      dog: {
        start: [2, 2],
        end:   [2, 4]
      }
    };

    expect(w.find(["dog"])).toEqual(expected);
  });

  test('uh oh now there is really a bat', () => {
    const grid = [
      "bat",
      "cat",
      "dog"
    ];

    const w = new WordSearch(grid);

    const expected = {
      bat: {
        start: [1, 1],
        end:   [1, 3]
      }
    };

    expect(w.find(["bat"])).toEqual(expected);
  });

  test('can find many words', () => {
    const grid = [
      "bat",
      "cat",
      "dog"
    ];

    const w = new WordSearch(grid);

    const expected = {
      bat: {
        start: [1, 1],
        end:   [1, 3]
      },
      cat: {
        start: [2, 1],
        end:   [2, 3]
      },
      dog: {
        start: [3, 1],
        end:   [3, 3]
      }
    };

    expect(w.find(["bat", "dog", "cat"])).toEqual(expected);
  });

  test('can find many words in a bigger grid', () => {
    const grid = [
      "xxbat",
      "catzz",
      "ydogy",
      "fisho",
      "birdq"
    ];

    const w = new WordSearch(grid);

    const expected = {
      bat:  {
        start: [1, 3],
        end:   [1, 5]
      },
      cat:  {
        start: [2, 1],
        end:   [2, 3]
      },
      dog:  {
        start: [3, 2],
        end:   [3, 4]
      },
      fish: {
        start: [4, 1],
        end:   [4, 4]
      },
      bird: {
        start: [5, 1],
        end:   [5, 4]
      }
    };

    expect(w.find(["bat", "dog", "cat", "fish", "bird"])).toEqual(expected);
  });

  test('can handle many words, and still handle one that is missing', () => {
    const grid = [
      "xxbat",
      "catzz",
      "ydogy",
      "fisho",
      "birdq"
    ];

    const w = new WordSearch(grid);

    const expected = {
      bat:    {
        start: [1, 3],
        end:   [1, 5]
      },
      cat:    {
        start: [2, 1],
        end:   [2, 3]
      },
      dog:    {
        start: [3, 2],
        end:   [3, 4]
      },
      fish:   {
        start: [4, 1],
        end:   [4, 4]
      },
      bird:   {
        start: [5, 1],
        end:   [5, 4]
      },
      iguana: undefined
    };

    expect(w.find(["bat", "dog", "cat", "fish", "bird", "iguana"])).toEqual(expected);
  });

  test('can find a right-to-left word too', () => {
    const grid = [
      "xxbat",
      "catzz",
      "ydogy",
      "fisho",
      "qdrib"
    ];

    const w = new WordSearch(grid);

    const expected = {
      bird: {
        start: [5, 5],
        end:   [5, 2]
      }
    };

    expect(w.find(["bird"])).toEqual(expected);
  });

  test('can find a top-to-bottom word', () => {
    const grid = [
      "bxx",
      "azz",
      "tyy"
    ];

    const w = new WordSearch(grid);

    const expected = {
      bat: {
        start: [1, 1],
        end:   [3, 1]
      }
    };

    expect(w.find(["bat"])).toEqual(expected);
  });

  test('can find a different top-to-bottom word', () => {
    const grid = [
      "cxx",
      "azz",
      "tyy"
    ];

    const w = new WordSearch(grid);

    const expected = {
      cat: {
        start: [1, 1],
        end:   [3, 1]
      }
    };

    expect(w.find(["cat"])).toEqual(expected);
  });

  test('can find yet another top-to-bottom word', () => {
    const grid = [
      "cxx",
      "azz",
      "ryy"
    ];

    const w = new WordSearch(grid);

    const expected = {
      car: {
        start: [1, 1],
        end:   [3, 1]
      }
    };

    expect(w.find(["car"])).toEqual(expected);
  });

  test('can find yet some other top-to-bottom word', () => {
    const grid = [
      "bxx",
      "azz",
      "ryy"
    ];

    const w = new WordSearch(grid);

    const expected = {
      bar: {
        start: [1, 1],
        end:   [3, 1]
      }
    };

    expect(w.find(["bar"])).toEqual(expected);
  });


});