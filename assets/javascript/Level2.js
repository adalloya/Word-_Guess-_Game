// Words to be guess
var firstWord = ["m", "a", "r", "i", "o"];

// Numbers of letter to win
var letterToComplete= firstWord.length;

// Numbers of letter right
correctLetters = 0

// Number of attemps
var counter= 15; 


// Number of attemps
var score=0;

// Reload game
function myFunction() {
    window.location.href = "index.html";
}

// Reload game
function myFunction2() {
    window.location.href = "level3.html";
}

// MAIN PROCESS
    // ==============================================================================

// When the user presses a key, it will run the following function...
document.onkeyup = function(event) {

// Determine which key was pressed, make it lowercase, and set it to the userInput variable.
var userGuess = event.key.toLowerCase();


// Compare user with array if not right
if (firstWord.indexOf(userGuess)===-1) {
    counter--
        ;}
    
// Compare user with array if is right  

else if (userGuess=== "m" ){
document.querySelector("#m").innerHTML = "M<audio autoplay><source src=assets/sounds/type.m4a type=audio/mpeg></audio>";
correctLetters++
      }
else if (userGuess=== "a" ){
document.querySelector("#a").innerHTML = "A<audio autoplay><source src=assets/sounds/type.m4a type=audio/mpeg></audio>";
correctLetters++
      }
else if (userGuess=== "r" ){
document.querySelector("#r").innerHTML = "R<audio autoplay><source src=assets/sounds/type.m4a type=audio/mpeg></audio>";
correctLetters++
      }
else if (userGuess=== "i" ){
document.querySelector("#i").innerHTML = "I<audio autoplay><source src=assets/sounds/type.m4a type=audio/mpeg></audio>";
correctLetters++
      }
else if (userGuess=== "o" ){
document.querySelector("#o").innerHTML = "O<audio autoplay><source src=assets/sounds/type.m4a type=audio/mpeg></audio>";
correctLetters++
      }
// letters typed log
var letters = userGuess + "-";

// Screen print the letters typed
document.querySelector("#guess").innerHTML+= letters;

// Update print score
document.querySelector("#counter").innerHTML= counter;

// // Game over screen
if ( counter ===0){
document.querySelector(".container").innerHTML = "<div class=row id=textalign> <h1 class=gameover> GAME OVER </h1> </div> <div class=row id=textalign> <button class=button onclick=myFunction()><span>Play Again</span></button></div><audio autoplay><source src=assets/sounds/end.mp3 type=audio/mpeg></audio> </div>";
}

if (correctLetters === letterToComplete){
    document.querySelector(".container").innerHTML = "<div class=row id=textalign> <h1 class=win> The princess is in another castle!</h1></div> <br> <div class=row id=textalign> <img class=logoWin src=assets/images/mario.gif> </div> <br> <div class=row id=textalign> <button class=button onclick=myFunction2()><span>Next Word</span></button></div><audio autoplay><source src=assets/sounds/mariowin.mp3 type=audio/mpeg></audio></div>";
    score++;
    document.querySelector("#wins").innerHTML= score;
    audio1.autoplay();
}
};

