// when button is clicked the users should she prompt window
// first should be password length 8-128 char
// ask which character types should be included lower, upper, symbols, and numbers
// validate input 
// password should generate criteria
// passwords should be generated on screen
let passLength;

let password = ``;

let upperLetter = [`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`, `O`, `P`, `Q`, `R`, `S`, `T`, `U`, `V`, `W`, `X`, `Y`, `Z`];

const lowLetter = [`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`, `j`, `k`, `l`, `m`, `n`, `o`, `p`, `q`, `r`, `s`, `t`, `u`, `v`, `w`, `x`, `y`, `z`];

const number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const specialSymbol = [`!`, `@`, `#`, `$`, `%`, `^`, `&`, `*`, `,`, `.`, `?`];

const generateBtn = document.querySelector("#generate");

function generatePassword() {

    passLength = prompt (`How Long would you like your password to be?`);
    if(passLength <= 7){
        alert(`you need at least 8 characters`);
    } else if (passLength >= 129){
        alert(`you can not have more than 128 characters`);
    } 
    upperLetter = confirm(`Would you like to use upper case letters?`);
    if(upperLetter){
        
    }

}





function writePassword() {
    
    const password = generatePassword();
    
    const passwordText = document.querySelector("#password");
    
    passwordText.value = password;
    
}




generateBtn.addEventListener("click", writePassword);
