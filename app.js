var inputText = document.querySelector("#input-text");
var btnSubmit = document.querySelector("#btn-submit");
var outputText = document.querySelector("#output-text");

var url = "https://api.funtranslations.com/translate/numbers.json?text=";

function errorHandler(error) {
    console.log("Error occured", error);
    var input = inputText.value

    fetch(returnURL(input))
    .then(Response => Response.json())
    .then(json => {
        alert(json.error.message)
    })
}

function returnURL(input) {
    return url + input 
}

function submitEventHandler() {
   var input = inputText.value
   
   fetch(returnURL(input))
   .then(Response => Response.json())
   .then(json => {
        var convertedText = json.contents.translated
        outputText.innerText = convertedText
   })
   .catch(errorHandler)
}

btnSubmit.addEventListener("click", submitEventHandler);