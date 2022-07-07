/* Author: 

*/
var generatedPassword = document.querySelector(".generated-password");
const copy = document.querySelector(".icon");
const length = document.querySelector(".length");
const lowercase = document.querySelector(".lowercase");
const uppercase = document.querySelector(".uppercase");
const symbols = document.querySelector(".symbols");
const number = document.querySelector(".number");
const submit = document.querySelector(".generate-password");

generatedPassword.innerText = '';

const randomFunc = {
  upper: uppercaseCharacter,
  lower: lowercaseCharacter,
  number: numberCharacter,
  symbol: symbolCharacter
};

submit.addEventListener("click", () => {
  var lengthValue = +length.value;
  const uppercaseValue = uppercase.checked;
  const lowercaseValue = lowercase.checked;
  const numberValue = number.checked;
  const symbolsValue = symbols.checked;

  generatedPassword.innerText = generatePassword(
    lengthValue,
    uppercaseValue,
    lowercaseValue,
    numberValue,
    symbolsValue
  );
  });

copy.addEventListener('click',() => {
  const textarea = document.createElement('textarea');
  const password = generatedPassword.innerText;
  if(!password){
    return;
  }

  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  textarea.remove();
  alert('Password copied to clipboard')
})

function generatePassword(length,upper,lower,number,symbol){
  
  let generatedPassword = '';
  
  const types = upper + lower + number + symbol;
  const typesarr = [{upper},{lower},{number},{symbol}].filter(item => Object.values(item)[0]);

  if(types === 0){
    return '';
  }

  for(let i = 0; i < length;i += types){
    typesarr.forEach(type => {
      const funcName = Object.keys(type)[0];
      generatedPassword += randomFunc[funcName]();
    });
  }
  const finalPassword = generatedPassword.slice(0,length);
  
  console.log(finalPassword);
  return finalPassword;
}

function lowercaseCharacter() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function uppercaseCharacter() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function numberCharacter() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 48);
}
function symbolCharacter() {
  return String.fromCharCode(Math.floor(Math.random() * 17) + 123);
}
