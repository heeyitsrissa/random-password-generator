// when button is clicked the users should she prompt window
// first should be password length 8-128 char
// ask which character types should be included lower, upper, symbols, and numbers
// validate input 
// password should generate criteria
// passwords should be generated on screen
let passLength;

let password = ``;

const generateBtn = document.querySelector("#generate");

let passChoices = {
upperLetter: [`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`, `O`, `P`, `Q`, `R`, `S`, `T`, `U`, `V`, `W`, `X`, `Y`, `Z`],
lowLetter: [`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`, `j`, `k`, `l`, `m`, `n`, `o`, `p`, `q`, `r`, `s`, `t`, `u`, `v`, `w`, `x`, `y`, `z`],
number: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
specialSymbol: [`!`, `@`, `#`, `$`, `%`, `^`, `&`, `*`, `,`, `.`, `?`]
};


function prompts() {

    passLength = prompt (`How Long would you like your password to be?(8-128 characters)`) 

    if(passLength <= 7){
        alert(`you need at least 8 characters`);
        generatePassword();
    } else if (passLength >= 129){
        alert(`you can not have more than 128 characters`);
        generatePassword();
    } else {
        password = password.concat(passLength)
    }
   if ( confirm(`Would you like to use upper case letters?`)) {
     password = password.concat(passChoices.upperLetter)
   }
   if (confirm(`Would you like to add lowercase letters?`)) {
    password = password.concat(passChoices.lowLetter);
   }
   if (confirm (`Would you like to add numbers?`)){
    password = password.concat(passChoices.number);
   }
   if(confirm(`woulc you like to include special symbols?`)){
    password = password.concat(passChoices.specialSymbol);
   }
}

function generatePassword(){
   password = ``;
   for(let i = 0; 1 < passLength; i++) {
    const index = math.floor(math.random() * passLength)
   }
}







function writePassword() {
    password = generatePassword();
    
    const passwordText = document.querySelector("#password");
    
    passwordText.value = password;
    
}




generateBtn.addEventListener("click", writePassword);
