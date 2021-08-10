window.onload = function () {

var seconds = 00; 
var tens = 00; 
var hundreds = 00;
var appendHundreds = document.getElementById("hundreds")
var appendTens = document.getElementById("tens");
var appendSeconds = document.getElementById("seconds");
var buttonStart = document.getElementById('button-start');
var buttonStop = document.getElementById('button-stop');
var buttonReset = document.getElementById('button-reset');
var Interval ;
  
    buttonStart.onclick = function() {
      
       clearInterval(Interval);
       Interval = setInterval(startTimer, 10);
    }
    
      buttonStop.onclick = function() {
         clearInterval(Interval);
    }
    
  
    buttonReset.onclick = function() {
       clearInterval(Interval);
       hundreds = "";
      tens = "00";
        seconds = "00";
      appendHundreds.innerHTML = hundreds;
      appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
    }
    
     
    
    function startTimer () {
      hundreds++;
         
      if (hundreds <= 99){
        appendHundreds.innerHTML =  hundreds;
      }

      if (hundreds > 99){
        appendHundreds.innerHTML = hundreds;
      }

      if (hundreds > 99){
        console.log("hundreds");
        tens++; 
        appendTens.innerHTML = "0" + tens;
        hundreds = 0;
  
      }
     
      
      if(tens <= 9){
        appendTens.innerHTML = "0" + tens;
      }
      
      if (tens > 9){
        appendTens.innerHTML = tens;
        
      } 
      
      if (tens > 59) {
        console.log("seconds");
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0;

      }
      
      if (seconds > 9){
        appendSeconds.innerHTML = seconds;
      }
   
    
    
  
    }

  }