const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let result = ''
    for(let i = 0; i < expr.length; i += 10){
        let letterCode = expr.substring(i, i+10)
        
        if(letterCode != '**********'){
          let morzeKey = ''
          for(let j = 0; j < letterCode.length; j += 2){
            let morzeItem = letterCode.substring(j, j+2)
            //console.log(morzeItem)
            if(morzeItem === '10'){
              morzeKey+='.'
            }else if(morzeItem === '11'){
              morzeKey+='-'
            }
          }
          let a = MORSE_TABLE[morzeKey]
          result+=a
          //console.log(a, morzeKey)
          morzeKey=''

        }else{
            result+=' '
        }
        

    }
    return result;
}

module.exports = {
    decode
}