// when button is clicked the users should she prompt window
// first should be password length 8-128 char
// ask which character types should be included lower, upper, symbols, and numbers
// validate input 
// password should generate criteria
// passwords should be generated on screen
let passLength;

let promptsPass = [];

const generateBtn = document.querySelector("#generate");

  const upperLetter = [`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`, `O`, `P`, `Q`, `R`, `S`, `T`, `U`, `V`, `W`, `X`, `Y`, `Z`];

   const lowLetter = [`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`, `j`, `k`, `l`, `m`, `n`, `o`, `p`, `q`, `r`, `s`, `t`, `u`, `v`, `w`, `x`, `y`, `z`];

   const number = [`0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`];

   const specialSymbol = [`!`, `@`, `#`, `$`, `%`, `^`, `&`, `*`, `,`, `.`, `?`];

function writePassword() {
    prompts();

    password = generatePassword();
    
    const passwordText = document.querySelector("#password");
    
    passwordText.value = password;
    
}


generateBtn.addEventListener("click", writePassword);


function prompts() {
    promptsPass = [];

    passLength = prompt (`How Long would you like your password to be?(8-128 characters)`)
    
    if(passLength <= 7){
        alert(`you need at least 8 characters`);
        prompts();
    } else if (passLength >= 129){
        alert(`you can not have more than 128 characters`);
        prompts();
    } else if (isNaN(passLength)){
        alert (`Must be a number!`);
        prompts();
    } 
    

    if ( confirm(`Would you like to use upper case letters?`)) {
     promptsPass = promptsPass.concat(upperLetter);
    }
    if (confirm(`Would you like to add lowercase letters?`)) {
    promptsPass = promptsPass.concat(lowLetter);
    }
    if (confirm (`Would you like to add numbers?`)){
    promptsPass = promptsPass.concat(number);
    }
    if(confirm(`woulc you like to include special symbols?`)){
    promptsPass = promptsPass.concat(specialSymbol);
    }
   
}



function generatePassword(){
    let passphrase = ``;
    for(let i = 0; i < passLength; i++){
        const index = Math.floor(Math.random() * promptsPass.length);
        passphrase = passphrase + promptsPass[index];
    }
    return passphrase;
}











