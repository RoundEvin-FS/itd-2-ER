const canvas = document.querySelector("canvas");

canvas.width = 500;
canvas.height = 500;

const ctx = canvas.getContext("2d");

ctx.fillStyle = "white";

// x, y, width, height = bar chart number
//drawing downwards
ctx.fillRect(0, 250, 50, 100);

//draw upwards
//push y up, subtract height from y

ctx.fillRect(0, 250-50, 50, 50);

//or use negative height

ctx.fillRect(0, 250, 50, -200);

for(let 1=1; 1<=3; 1++) {
    //x position that changes
    let posX = i * 100; 
    const min =1;
    const max = 100;
    let randomNumber = Math.floor(Math.random() * (max - min + 1)+ min);
    console.log(randomNumber);
    //draw rectangle
    ctx.fillStyle = "red";
    //x , y , width, height
    ctx.fillRect(posX, 250-randomNumber, 50, randomNumber);
    //draw text
    ctx.font = "20px Arial";
    // text, x, y
    ctx.fillText(randomNumber, posX, 250 - randomNumber);
}

//----------------------------------------------------------------------

//for loops
//starting number, end number, how to count by
//initialization, condition, incrementation
for(let i =1; i<= 5; i++ ){
    console.log(hello);
}
