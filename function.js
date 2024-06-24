const inputSlider = document.getElementById("inputSlider");
const sliderValue = document.getElementById("sliderValue");
const passBox = document.getElementById("PassBox");
const lowerCaseEl = document.getElementById("lowercase");
const upperCaseEl = document.getElementById("uppercase");
const numberEL = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateBtn = document.getElementById("GetBtn");
const copyIcon = document.getElementById("copyIcon");


const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const numbers = "0123456789"
const symbols = "1@#$%^&*()_+-=[]{};':./><,.?\\|";


sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener("input",()=>{
    sliderValue.textContent = inputSlider.value;

});


generateBtn.addEventListener("click",()=>{
    passBox.value =generetePassword(); //called the function

});

function generetePassword(){

    const length =inputSlider.value;
    let characters = "";
    let password = "";
    
    characters +=lowerCaseEl.checked ? lowercaseLetters:"";
    characters +=upperCaseEl.checked ? uppercaseLetters:"";
    characters +=numberEL.checked ? numbers:"";
    characters +=symbolsEl.checked ? symbols:"";

    for(let i =0; i<length; i++){

        password += characters.charAt(Math.floor(Math.random()*characters.length));
        console.log(password); 
    }

    return password;

}


copyIcon.addEventListener("click",()=>{

    if(passBox.value !="" || passBox.value.length>=10){
           
          navigator.clipboard.writeText(passBox.value);
          copyIcon.innerText = "check";

          setTimeout(()=>{
            copyIcon.innerHTML = "content_copy";

          },2000);

    }
});