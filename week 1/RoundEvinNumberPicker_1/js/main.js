(function() {
    let userNumber;
    let randomNumber = getRandom();
    let guess = 0;
    playGame();
 
    function getRandom(x){
        return Math.floor(Math.random( ) * x + 1);
        } 
 
    function gameOver() {
            alert("Game Over!");
            }
    function playGame() {
        userNumber = prompt("Enter a number between 1 and 5.");
        randomNumber = getRandom(5);
        if (userNumber > randomNumber) {    
            alert("Too high!");
            
            playGame();
    } 
        else if (userNumber < randomNumber) {
        alert("Too low!"); 
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
        randomNumber=getRandom(10);
        if (userNumber > randomNumber) {    
            alert("Too high!");
            round2();
    } 
        else if (userNumber < randomNumber) {
        alert("Too low!");  
            round2();
    }
        else {
            alert("You won!"); 
            round3(); 
    }
    }
    function round3() {
            userNumber = prompt("Enter a number between 1 and 25.");
            randomNumber=getRandom(25);
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