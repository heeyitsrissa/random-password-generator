// when button is clicked the users should she prompt window
// first should be password length 8-128 char
// ask which character types should be included lower, upper, symbols, and numbers
// validate input 
// password should generate criteria
// passwords should be generated on screen
let passLength = 8 - 128;

let upperLetter = [`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`, `O`, `P`, `Q`, `R`, `S`, `T`, `U`, `V`, `W`, `X`, `Y`, `Z`];

let lowLetter = [`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`, `j`, `k`, `l`, `m`, `n`, `o`, `p`, `q`, `r`, `s`, `t`, `u`, `v`, `w`, `x`, `y`, `z`];

let number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

let specialSymbol = [`!`, `@`, `#`, `$`, `%`, `^`, `&`, `*`, `,`, `.`, `?`];

const generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);


function writePassword() {
    
    const password = generatePassword();
    
    const passwordText = document.querySelector("#password");
    
    passwordText.value = password;
    
}

function generatePassword()
   

