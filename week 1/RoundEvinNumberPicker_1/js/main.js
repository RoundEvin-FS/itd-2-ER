(function() {
    let userNumber;
    let randomNumber = getRandom();
    let guess = 0;
    let name;
    alert("Let's play a guessing game!");
    name = prompt("What is your name?");
    

    playGame();
 
    function getRandom(){
        return Math.floor(Math.random( ) * 5 + 1);
        } 
        function gameOver(){
            alert("Game Over!");
            let answer = prompt("Do you want to play again?");
            if(answer == "yes" || answer == "y"){
                playGame();
            } else {
        "Game Over!"
    }}
 
    function playGame() {
        userNumber = prompt("Enter a number between 1 and 5.");
        if (userNumber > randomNumber) {    
            alert("Too high!");
            guess++;
            if (guess >=4) { gameOver();}
            playGame();
    } 
        else if (userNumber < randomNumber) {
            alert("Too low!"); 
            guess++;
            if (guess >=4) { gameOver();}
            playGame();
    }
        else {
            alert("You won!"); 
            round2(); 
    }
}
 
    function round2() {
        guess = 0;
        userNumber = prompt("Enter a number between 1 and 10.");
 
        if (userNumber > randomNumber) {    
            alert("Too high!");
            guess++;
            round2();
            
    } 
        else if (userNumber < randomNumber) {
            alert("Too low!");  
            guess++;
            round2();
    }
        else {
            alert("You won!"); 
            round3(); 
    }
    }
    function round3() {
            userNumber = prompt("Enter a number between 1 and 25.");
            if (userNumber > randomNumber) {    
                alert("Too high!");
                round3();
        } 
            else if (userNumber < randomNumber) {
            alert("Too low!");  
            round3();
        }
            else {
                alert("You won!"); 
                gameOver()
        }
    
        
    }
})();