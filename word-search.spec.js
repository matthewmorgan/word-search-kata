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
  });

  test('find can find a word', ()=> {
    const grid = [
      "cat",
      "dog",
      "sun"
    ];

    const w = new WordSearch(grid);

    const expected = {
      cat: {
        start: [1,1],
        end: [1,3]
      }
    };

    expect(w.find(["cat"])).toEqual(expected);
  });

  test('find can find a different word', ()=> {
    const grid = [
      "cat",
      "dog",
      "sun"
    ];

    const w = new WordSearch(grid);

    const expected = {
      dog: {
        start: [2,1],
        end: [2,3]
      }
    };

    expect(w.find(["dog"])).toEqual(expected);
  });

  test('find can find a different word', ()=> {
    const grid = [
      "catf",
      "bdog",
      "suno",
      "fish"
    ];

    const w = new WordSearch(grid);

    const expected = {
      dog: {
        start: [2,2],
        end: [2,4]
      }
    };

    expect(w.find(["dog"])).toEqual(expected);
  });

  test('uh oh now there is really a bat', ()=> {
    const grid = [
      "bat",
      "cat",
      "dog"
    ];

    const w = new WordSearch(grid);

    const expected = {
      bat: {
        start: [1,1],
        end: [1,3]
      }
    };

    expect(w.find(["bat"])).toEqual(expected);
  });

  test('can find many words', ()=> {
    const grid = [
      "bat",
      "cat",
      "dog"
    ];

    const w = new WordSearch(grid);

    const expected = {
      bat: {
        start: [1,1],
        end: [1,3]
      },
      cat: {
        start: [2,1],
        end: [2,3]
      },
      dog: {
        start: [3,1],
        end: [3,3]
      }
    };

    expect(w.find(["bat", "dog", "cat"])).toEqual(expected);
  });

  test('can find many words in a bigger grid', ()=> {
    const grid = [
      "xxbat",
      "catzz",
      "ydogy",
      "fisho",
      "birdq"
    ];

    const w = new WordSearch(grid);

    const expected = {
      bat: {
        start: [1,3],
        end: [1,5]
      },
      cat: {
        start: [2,1],
        end: [2,3]
      },
      dog: {
        start: [3,2],
        end: [3,4]
      },
      fish: {
        start: [4,1],
        end: [4,4]
      },
      bird: {
        start: [5,1],
        end: [5,4]
      }
    };

    expect(w.find(["bat", "dog", "cat", "fish", "bird"])).toEqual(expected);
  });

  test('can handle many words, and still handle one that is missing', ()=> {
    const grid = [
      "xxbat",
      "catzz",
      "ydogy",
      "fisho",
      "birdq"
    ];

    const w = new WordSearch(grid);

    const expected = {
      bat: {
        start: [1,3],
        end: [1,5]
      },
      cat: {
        start: [2,1],
        end: [2,3]
      },
      dog: {
        start: [3,2],
        end: [3,4]
      },
      fish: {
        start: [4,1],
        end: [4,4]
      },
      bird: {
        start: [5,1],
        end: [5,4]
      },
      iguana: undefined
    };

    expect(w.find(["bat", "dog", "cat", "fish", "bird", "iguana"])).toEqual(expected);
  });



});