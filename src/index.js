var newVar = "00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010"


const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {

    let newStr = expr.split("**********");
    let word = newStr.map(splitedWord => splitedWord.match(/.{1,10}/g));
    let words = [];
    word.forEach(element => words.push(element.map(x => {
            let decoded = x.substr(x.indexOf('1')).replace(/10/g, '.').replace(/11/g, '-');
            return MORSE_TABLE[decoded];
        })));
return words.map(x => x.join('')).join(' ');

}

module.exports = {
    decode
}