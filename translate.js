//Exercise-2
/*var username=prompt("Enter your name");
 console.log("Welcome!"+username);
 alert("Welcome! "+username);*/

 var translateButton=document.querySelector("#button-translate");
 translateButton.addEventListener("click",buttonClicked);

var output=document.querySelector("#Minion-Text");
var url="https://api.funtranslations.com/translate/minion.json";


function ErrorHandler(error)
{
    alert("Oops!Looks like the server is currently down.Please try again later!")
}
 function buttonClicked()
 {
     //Input
    var input=document.querySelector("#input-text");
    var inp_value=input.value;
    inp=url+"?text="+inp_value;

    //Calling Server for Processing
    fetch(inp)
    .then(response => response.json()) //Arrow function to convert respose to json
    .then(data => {
        var translatedText=data.contents.translated;
        output.innerText=translatedText //Output
    })//Arrow function to print data(json) 
    .catch(ErrorHandler)   
 };