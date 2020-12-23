
const fs = require("fs");

function keypadToWords(keyStrokes) {
  const map = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
  }
  if (!keyStrokes.length) {
    return []
  }
  let result = ['']
  let index = 0
  while (index < keyStrokes.length) {
    const next = map[keyStrokes[index]]

    const nextResult = []
    for (let i = 0; i < result.length; i++) {
      for (let j = 0; j < next.length; j++) {

        //  console.log("next :"  + result[i] , next[j]  );
        nextResult.push(result[i] + next[j])
      }
    }
    result = nextResult
    index++
  }


  let wordsList = [];
  for (i = 0; i < result.length; i++) {
    let searchString = result[i]
    if (isValid(searchString)) {

      wordsList.push(searchString);
    }
  }
  return wordsList;
}

function isValid(searchString) {
  
  const data = fs.readFileSync('english_words.txt',
    { encoding: 'utf8', flag: 'r' });

  if (new RegExp("\\b" + searchString + "\\b").test(data)) {
    return true;
  }
}


 //console.log(keypadToWords('23'));

