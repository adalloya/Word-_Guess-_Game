// Words to be guess
var firstWord = ["m", "e", "g", "a", "m","a","n"];

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

// Nextlevel
function myFunction2() {
    window.location.href = "level4.html";
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
document.querySelector("#m2").innerHTML = "M";
correctLetters++
      }
else if (userGuess=== "e" ){
document.querySelector("#e").innerHTML = "E<audio autoplay><source src=assets/sounds/type.m4a type=audio/mpeg></audio>";
correctLetters++
      }
else if (userGuess=== "g" ){
document.querySelector("#g").innerHTML = "G<audio autoplay><source src=assets/sounds/type.m4a type=audio/mpeg></audio>";
correctLetters++
      }
else if (userGuess=== "a" ){
document.querySelector("#a").innerHTML = "A<audio autoplay><source src=assets/sounds/type.m4a type=audio/mpeg></audio>";
document.querySelector("#a2").innerHTML = "A<audio autoplay><source src=assets/sounds/type.m4a type=audio/mpeg></audio>";
correctLetters++
      }
else if (userGuess=== "n" ){
        document.querySelector("#n").innerHTML = "N<audio autoplay><source src=assets/sounds/type.m4a type=audio/mpeg></audio>";
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

if (correctLetters === letterToComplete-2){
    document.querySelector(".container").innerHTML = "<div class=row id=textalign> <h1 class=win3> Ten-four, Supreme Space Cadet, sir </h1><h1 class=win2> Congratulations, you have finished all the current levels, more coming soon!</h1></div> <br> <div class=row id=textalign> <img class=logoWin src=assets/images/megaman.gif> </div> <br> <div class=row id=textalign> <button class=button onclick=myFunction()><span>Play Again</span></button></div><audio autoplay><source src=assets/sounds/megamanwin.mp3 type=audio/mpeg></audio></div>";
    score++;
    document.querySelector("#wins").innerHTML= score;
    audio1.autoplay();
}
};

