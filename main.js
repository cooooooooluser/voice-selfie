var speechRecognition = window.webkitSpeechRecognition;
var recognition = new speechRecognition();

function record() {
    document.getElementById("textbox").innerHTML = " ";
    recognition.start(); 
}

recognition.onresult = function run(e){
   console.log(e);
   var content = e.results[0][0].transcript;
   console.log(content);
   document.getElementById("textbox").innerHTML = content;
} 

