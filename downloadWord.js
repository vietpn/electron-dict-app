const request = require('request');
const fs = require('fs');

let arrWords = [];
// get words from www.wordcount.org
let downloadWords = (i) => {
  // loop get word from array
  request(`http://www.wordcount.org/dbquery.php?toFind=${i}&method=SEARCH_BY_INDEX`, function (error, response, body) {
    if (body) {
      let arr = body.split("&");
      let rePattern = new RegExp(/^word[0-9]+/);

      arr.forEach(element => {
        if (element.match(rePattern)) {
          let word = element.split('=');
          if (word[1] && !(arrWords.indexOf(word[1]) > -1)) {
            arrWords.push(word[1]);
          }
        }
      });

      if (i < 86500) {
        downloadWords(i + 301);
      } else {
        fs.appendFile('words.txt',JSON.stringify(arrWords), function (err) {
          if (err) throw err;
        });
      }
    }
  });
}

downloadWords(0);