var btnTranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#txt-input");
var textOutput = document.querySelector("#text-output");

function clickEventHandler(){
    console.log('clicked');
    console.log(textInput.value);
    textOutput.innerText=textInput.value;
}

btnTranslate.addEventListener("click",clickEventHandler)




