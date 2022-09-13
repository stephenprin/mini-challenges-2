const MORSE_CODE = {
  "-.-.--": "!",
  ".-..-.": '"',
  "...-..-": "$",
  ".-...": "&",
  ".----.": "'",
  "-.--.": "(",
  "-.--.-": ")",
  ".-.-.": "+",
  "--..--": ",",
  "-....-": "-",
  ".-.-.-": ".",
  "-..-.": "/",
  "-----": "0",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "---...": ":",
  "-.-.-.": ";",
  "-...-": "=",
  "..--..": "?",
  ".--.-.": "@",
  ".-": "A",
  "-...": "B",
  "-.-.": "C",
  "-..": "D",
  ".": "E",
  "..-.": "F",
  "--.": "G",
  "....": "H",
  "..": "I",
  ".---": "J",
  "-.-": "K",
  ".-..": "L",
  "--": "M",
  "-.": "N",
  "---": "O",
  ".--.": "P",
  "--.-": "Q",
  ".-.": "R",
  "...": "S",
  "-": "T",
  "..-": "U",
  "...-": "V",
  ".--": "W",
  "-..-": "X",
  "-.--": "Y",
  "--..": "Z",
  "..--.-": "_",
  "...---...": "SOS",
};



Object.freeze(MORSE_CODE);



function morse(text) {
 let spaceLetter= text.split("   ")
 

 let words= spaceLetter.map(elem=>elem.split(" "))
 console.log(words)

 let decodeCode=[];
  for (let i = 0; i < words.length; i++) {
    decodeCode[i]=[]

    
    for (let j = 0; j < words[i].length; j++) {
      if(MORSE_CODE[words][i][j]){
        decoded[i].push( MORSE_CODE[words[i][x]] );
      }
      
    }
   console.log(decodeCode) 
  }
 decodeCode.map(arr=>arr.join("")).join(" ")

}
morse("------....")
module.exports = morse;



// let symbolCode=text;
// let spaceLetter=symbolCode.split('   ')
// // get word code, 3 spaces apart
// let spaceLetterOne=spaceLetter.map(word => word.split(' ')) // get character code, 1 spaces apart
//              spaceLetterOne.map(character => MORSE_CODE[character]).join('') // join characters to word

//    return spaceLetterOne