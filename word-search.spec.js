import WordSearch from './word-search';


describe('single line grids', () => {
  test('Should accept an initial game grid', () => {
    const grid = "jefblpepre";

    const wordSearch = new WordSearch(grid);

    expect(wordSearch instanceof WordSearch).toEqual(true);
  });

  test('can accept a target search word', () => {

    const grid = "jefblpepre";


    const wordSearch = new WordSearch(grid);

    expect(wordSearch.find("glasnost")).toEqual(undefined);
  });

  test('should locate a word written left to right', () => {
    const grid = "clojurermt";

    const expectedResults = {
      "start": 1,
      "end":   7
    };


    const wordSearch = new WordSearch(grid);

    expect(wordSearch.find("clojure")).toEqual(expectedResults);
  });

  test('can locate a left to right word in a different position', () => {

    const grid = "mtclojurer";

    const expectedResults = {
      "start": 3,
      "end":   9
    };


    const wordSearch = new WordSearch(grid);

    expect(wordSearch.find("clojure")).toEqual(expectedResults);

  });

  test('can locate a different left to right word', () => {

    const grid = "javamtzlplx";

    const expectedResults = {
      "start": 1,
      "end":   4
    };


    const wordSearch = new WordSearch(grid);

    expect(wordSearch.find("java")).toEqual(expectedResults);

  });

  test('can locate that different left to right word in a different position', () => {

    const grid = "xjavamtzlp";

    const expectedResults = {
      "start": 2,
      "end":   5
    };


    const wordSearch = new WordSearch(grid);

    expect(wordSearch.find("java")).toEqual(expectedResults);

  });

});

describe('multi line grids', () => {
  test('can locate a left to right word in a two line grid', () => {

    const grid = [
      "jefblpepre",
      "clojurermt"
    ];

    const expectedResults = {
      "start": [2, 1],
      "end":   [2, 7]
    };


    const wordSearch = new WordSearch(grid);

    expect(wordSearch.find("clojure")).toEqual(expectedResults);

  });

  test('can locate a left to right word in a different position in a two line grid', () => {

    const grid = [
      "jefblpepre",
      "tclojurerm"
    ];

    const expectedResults = {
      "start": [2, 2],
      "end":   [2, 8]
    };


    const wordSearch = new WordSearch(grid);

    expect(wordSearch.find("clojure")).toEqual(expectedResults);

  });

  test('can locate a left to right word in a three line grid', () => {

    const grid = [
      "camdcimgtc",
      "jefblpepre",
      "clojurermt",
    ];

    const expectedResults = {
      "start": [3, 1],
      "end":   [3, 7]
    };


    const wordSearch = new WordSearch(grid);

    expect(wordSearch.find("clojure")).toEqual(expectedResults);

  });

  test('can locate a left to right word in a ten line grid', () => {

    const grid = [
      "jefblpepre",
      "camdcimgtc",
      "oivokprjsm",
      "pbwasqroua",
      "rixilelhrs",
      "wolcqlirpc",
      "screeaumgr",
      "alxhpburyi",
      "jalaycalmp",
      "clojurermt"
    ];

    const expectedResults = {
      "start": [10, 1],
      "end":   [10, 7]
    };


    const wordSearch = new WordSearch(grid);

    expect(wordSearch.find("clojure")).toEqual(expectedResults);

  });

  test('can locate a left to right word in a ten line grid', () => {

    const grid = [
      "jefblpepre",
      "camdcimgtc",
      "oivokprjsm",
      "pbwasqroua",
      "rixilelhrs",
      "wolcqlirpc",
      "screeaumgr",
      "alxhpburyi",
      "jalaycalmp",
      "clojurermt"
    ];

    const expectedResults = {
      "start": [10, 1],
      "end":   [10, 7]
    };


    const wordSearch = new WordSearch(grid);

    expect(wordSearch.find("clojure")).toEqual(expectedResults);

  });

  test('can locate a left to right word in a different position in a ten line grid', () => {

    const grid = [
      "jefblpepre",
      "camdcimgtc",
      "oivokprjsm",
      "pbwasqroua",
      "rixilelhrs",
      "wolcqlirpc",
      "screeaumgr",
      "alxhpburyi",
      "clojurermt",
      "jalaycalmp"
    ];

    const expectedResults = {
      "start": [9, 1],
      "end":   [9, 7]
    };


    const wordSearch = new WordSearch(grid);

    expect(wordSearch.find("clojure")).toEqual(expectedResults);

  });

  test('can locate a different left to right word in a ten line grid', () => {

    const grid = [
      "jefblpepre",
      "camdcimgtc",
      "oivokprjsm",
      "pbwasqroua",
      "rixilelhrs",
      "wolcqlirpc",
      "screeaumgr",
      "alxhpburyi",
      "clojurermt",
      "jalaycalmp"
    ];

    const expectedResults = {
      "start": [7, 1],
      "end":   [7, 5]
    };


    const wordSearch = new WordSearch(grid);

    expect(wordSearch.find("scree")).toEqual(expectedResults);

  });

});


describe('can find multiple words', () => {
  test('can find two words written left to right', () => {
    const grid = [
      "jefblpepre",
      "camdcimgtc",
      "oivokprjsm",
      "pbwasqroua",
      "rixilelhrs",
      "wolcqlirpc",
      "screeaumgr",
      "alxhpburyi",
      "jalaycalmp",
      "clojurermt",
      "xjavamtzlp"
    ];

    const expectedResults = {
      "clojure": {
        "start": [10, 1],
        "end":   [10, 7]
      },
      "java":    {
        "start": [11, 2],
        "end":   [11, 5]
      }
    };


    const wordSearch = new WordSearch(grid);

    expect(wordSearch.find(["java", "clojure"])).toEqual(expectedResults);

  });
});

//   {
//     "description": "Should locate words written right to left",
//     "property": "search",
//     "grid": [
//       "jefblpepre",
//       "camdcimgtc",
//       "oivokprjsm",
//       "pbwasqroua",
//       "rixilelhrs",
//       "wolcqlirpc",
//       "screeaumgr",
//       "alxhpburyi",
//       "jalaycalmp",
//       "clojurermt"
//     ],
//     "wordsToSearchFor": [
//       "clojure",
//       "elixir"
//     ],
//     "expected": {
//       "clojure": {
//         "start": {
//           "column": 1,
//           "row": 10
//         },
//         "end": {
//           "column": 7,
//           "row": 10
//         }
//       },
//       "elixir": {
//         "start": {
//           "column": 6,
//           "row": 5
//         },
//         "end": {
//           "column": 1,
//           "row": 5
//         }
//       }
//     }
//   },
//   {
//     "description": "Should locate words written top to bottom",
//     "property": "search",
//     "grid": [
//       "jefblpepre",
//       "camdcimgtc",
//       "oivokprjsm",
//       "pbwasqroua",
//       "rixilelhrs",
//       "wolcqlirpc",
//       "screeaumgr",
//       "alxhpburyi",
//       "jalaycalmp",
//       "clojurermt"
//     ],
//     "wordsToSearchFor": [
//       "clojure",
//       "elixir",
//       "ecmascript"
//     ],
//     "expected": {
//       "clojure": {
//         "start": {
//           "column": 1,
//           "row": 10
//         },
//         "end": {
//           "column": 7,
//           "row": 10
//         }
//       },
//       "elixir": {
//         "start": {
//           "column": 6,
//           "row": 5
//         },
//         "end": {
//           "column": 1,
//           "row": 5
//         }
//       },
//       "ecmascript": {
//         "start": {
//           "column": 10,
//           "row": 1
//         },
//         "end": {
//           "column": 10,
//           "row": 10
//         }
//       }
//     }
//   },
//   {
//     "description": "Should locate words written bottom to top",
//     "property": "search",
//     "grid": [
//       "jefblpepre",
//       "camdcimgtc",
//       "oivokprjsm",
//       "pbwasqroua",
//       "rixilelhrs",
//       "wolcqlirpc",
//       "screeaumgr",
//       "alxhpburyi",
//       "jalaycalmp",
//       "clojurermt"
//     ],
//     "wordsToSearchFor": [
//       "clojure",
//       "elixir",
//       "ecmascript",
//       "rust"
//     ],
//     "expected": {
//       "clojure": {
//         "start": {
//           "column": 1,
//           "row": 10
//         },
//         "end": {
//           "column": 7,
//           "row": 10
//         }
//       },
//       "elixir": {
//         "start": {
//           "column": 6,
//           "row": 5
//         },
//         "end": {
//           "column": 1,
//           "row": 5
//         }
//       },
//       "ecmascript": {
//         "start": {
//           "column": 10,
//           "row": 1
//         },
//         "end": {
//           "column": 10,
//           "row": 10
//         }
//       },
//       "rust": {
//         "start": {
//           "column": 9,
//           "row": 5
//         },
//         "end": {
//           "column": 9,
//           "row": 2
//         }
//       }
//     }
//   },
//   {
//     "description": "Should locate words written top left to bottom right",
//     "property": "search",
//     "grid": [
//       "jefblpepre",
//       "camdcimgtc",
//       "oivokprjsm",
//       "pbwasqroua",
//       "rixilelhrs",
//       "wolcqlirpc",
//       "screeaumgr",
//       "alxhpburyi",
//       "jalaycalmp",
//       "clojurermt"
//     ],
//     "wordsToSearchFor": [
//       "clojure",
//       "elixir",
//       "ecmascript",
//       "rust",
//       "java"
//     ],
//     "expected": {
//       "clojure": {
//         "start": {
//           "column": 1,
//           "row": 10
//         },
//         "end": {
//           "column": 7,
//           "row": 10
//         }
//       },
//       "elixir": {
//         "start": {
//           "column": 6,
//           "row": 5
//         },
//         "end": {
//           "column": 1,
//           "row": 5
//         }
//       },
//       "ecmascript": {
//         "start": {
//           "column": 10,
//           "row": 1
//         },
//         "end": {
//           "column": 10,
//           "row": 10
//         }
//       },
//       "rust": {
//         "start": {
//           "column": 9,
//           "row": 5
//         },
//         "end": {
//           "column": 9,
//           "row": 2
//         }
//       },
//       "java": {
//         "start": {
//           "column": 1,
//           "row": 1
//         },
//         "end": {
//           "column": 4,
//           "row": 4
//         }
//       }
//     }
//   },
//   {
//     "description": "Should locate words written bottom right to top left",
//     "property": "search",
//     "grid": [
//       "jefblpepre",
//       "camdcimgtc",
//       "oivokprjsm",
//       "pbwasqroua",
//       "rixilelhrs",
//       "wolcqlirpc",
//       "screeaumgr",
//       "alxhpburyi",
//       "jalaycalmp",
//       "clojurermt"
//     ],
//     "wordsToSearchFor": [
//       "clojure",
//       "elixir",
//       "ecmascript",
//       "rust",
//       "java",
//       "lua"
//     ],
//     "expected": {
//       "clojure": {
//         "start": {
//           "column": 1,
//           "row": 10
//         },
//         "end": {
//           "column": 7,
//           "row": 10
//         }
//       },
//       "elixir": {
//         "start": {
//           "column": 6,
//           "row": 5
//         },
//         "end": {
//           "column": 1,
//           "row": 5
//         }
//       },
//       "ecmascript": {
//         "start": {
//           "column": 10,
//           "row": 1
//         },
//         "end": {
//           "column": 10,
//           "row": 10
//         }
//       },
//       "rust": {
//         "start": {
//           "column": 9,
//           "row": 5
//         },
//         "end": {
//           "column": 9,
//           "row": 2
//         }
//       },
//       "java": {
//         "start": {
//           "column": 1,
//           "row": 1
//         },
//         "end": {
//           "column": 4,
//           "row": 4
//         }
//       },
//       "lua": {
//         "start": {
//           "column": 8,
//           "row": 9
//         },
//         "end": {
//           "column": 6,
//           "row": 7
//         }
//       }
//     }
//   },
//   {
//     "description": "Should locate words written bottom left to top right",
//     "property": "search",
//     "grid": [
//       "jefblpepre",
//       "camdcimgtc",
//       "oivokprjsm",
//       "pbwasqroua",
//       "rixilelhrs",
//       "wolcqlirpc",
//       "screeaumgr",
//       "alxhpburyi",
//       "jalaycalmp",
//       "clojurermt"
//     ],
//     "wordsToSearchFor": [
//       "clojure",
//       "elixir",
//       "ecmascript",
//       "rust",
//       "java",
//       "lua",
//       "lisp"
//     ],
//     "expected": {
//       "clojure": {
//         "start": {
//           "column": 1,
//           "row": 10
//         },
//         "end": {
//           "column": 7,
//           "row": 10
//         }
//       },
//       "elixir": {
//         "start": {
//           "column": 6,
//           "row": 5
//         },
//         "end": {
//           "column": 1,
//           "row": 5
//         }
//       },
//       "ecmascript": {
//         "start": {
//           "column": 10,
//           "row": 1
//         },
//         "end": {
//           "column": 10,
//           "row": 10
//         }
//       },
//       "rust": {
//         "start": {
//           "column": 9,
//           "row": 5
//         },
//         "end": {
//           "column": 9,
//           "row": 2
//         }
//       },
//       "java": {
//         "start": {
//           "column": 1,
//           "row": 1
//         },
//         "end": {
//           "column": 4,
//           "row": 4
//         }
//       },
//       "lua": {
//         "start": {
//           "column": 8,
//           "row": 9
//         },
//         "end": {
//           "column": 6,
//           "row": 7
//         }
//       },
//       "lisp": {
//         "start": {
//           "column": 3,
//           "row": 6
//         },
//         "end": {
//           "column": 6,
//           "row": 3
//         }
//       }
//     }
//   },
//   {
//     "description": "Should locate words written top right to bottom left",
//     "property": "search",
//     "grid": [
//       "jefblpepre",
//       "camdcimgtc",
//       "oivokprjsm",
//       "pbwasqroua",
//       "rixilelhrs",
//       "wolcqlirpc",
//       "screeaumgr",
//       "alxhpburyi",
//       "jalaycalmp",
//       "clojurermt"
//     ],
//     "wordsToSearchFor": [
//       "clojure",
//       "elixir",
//       "ecmascript",
//       "rust",
//       "java",
//       "lua",
//       "lisp",
//       "ruby"
//     ],
//     "expected": {
//       "clojure": {
//         "start": {
//           "column": 1,
//           "row": 10
//         },
//         "end": {
//           "column": 7,
//           "row": 10
//         }
//       },
//       "elixir": {
//         "start": {
//           "column": 6,
//           "row": 5
//         },
//         "end": {
//           "column": 1,
//           "row": 5
//         }
//       },
//       "ecmascript": {
//         "start": {
//           "column": 10,
//           "row": 1
//         },
//         "end": {
//           "column": 10,
//           "row": 10
//         }
//       },
//       "rust": {
//         "start": {
//           "column": 9,
//           "row": 5
//         },
//         "end": {
//           "column": 9,
//           "row": 2
//         }
//       },
//       "java": {
//         "start": {
//           "column": 1,
//           "row": 1
//         },
//         "end": {
//           "column": 4,
//           "row": 4
//         }
//       },
//       "lua": {
//         "start": {
//           "column": 8,
//           "row": 9
//         },
//         "end": {
//           "column": 6,
//           "row": 7
//         }
//       },
//       "lisp": {
//         "start": {
//           "column": 3,
//           "row": 6
//         },
//         "end": {
//           "column": 6,
//           "row": 3
//         }
//       },
//       "ruby": {
//         "start": {
//           "column": 8,
//           "row": 6
//         },
//         "end": {
//           "column": 5,
//           "row": 9
//         }
//       }
//     }
//   },
//   {
//     "description": "Should fail to locate a word that is not in the puzzle",
//     "property": "search",
//     "grid": [
//       "jefblpepre",
//       "camdcimgtc",
//       "oivokprjsm",
//       "pbwasqroua",
//       "rixilelhrs",
//       "wolcqlirpc",
//       "screeaumgr",
//       "alxhpburyi",
//       "jalaycalmp",
//       "clojurermt"
//     ],
//     "wordsToSearchFor": [
//       "clojure",
//       "elixir",
//       "ecmascript",
//       "rust",
//       "java",
//       "lua",
//       "lisp",
//       "ruby",
//       "haskell"
//     ],
//     "expected": {
//       "clojure": {
//         "start": {
//           "column": 1,
//           "row": 10
//         },
//         "end": {
//           "column": 7,
//           "row": 10
//         }
//       },
//       "elixir": {
//         "start": {
//           "column": 6,
//           "row": 5
//         },
//         "end": {
//           "column": 1,
//           "row": 5
//         }
//       },
//       "ecmascript": {
//         "start": {
//           "column": 10,
//           "row": 1
//         },
//         "end": {
//           "column": 10,
//           "row": 10
//         }
//       },
//       "rust": {
//         "start": {
//           "column": 9,
//           "row": 5
//         },
//         "end": {
//           "column": 9,
//           "row": 2
//         }
//       },
//       "java": {
//         "start": {
//           "column": 1,
//           "row": 1
//         },
//         "end": {
//           "column": 4,
//           "row": 4
//         }
//       },
//       "lua": {
//         "start": {
//           "column": 8,
//           "row": 9
//         },
//         "end": {
//           "column": 6,
//           "row": 7
//         }
//       },
//       "lisp": {
//         "start": {
//           "column": 3,
//           "row": 6
//         },
//         "end": {
//           "column": 6,
//           "row": 3
//         }
//       },
//       "ruby": {
//         "start": {
//           "column": 8,
//           "row": 6
//         },
//         "end": {
//           "column": 5,
//           "row": 9
//         }
//       },
//       "haskell": null
//     }
//   }
// ]
// }