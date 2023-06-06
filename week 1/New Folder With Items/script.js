//Question 1

function question1 () {
    console.log("Question 1");
    console.log("Hello!");
}

question1();

//Question 2

function  question2(Name) {
    let name = Name;
    console.log(`Question 2`);
    console.log(`Hello ${name}!`);
}

question2("John");

//Question 3
console.log("Question 3");
let name2;
name2 = prompt("What is your name?");

function question3(){
    console.log(`Hello ${name2}!`);
}
question3();

//Question 4

console.log("Question 4");
let x;
let y;

function question4(x , y){
    const sum = x * y;
    console.log(sum);
}

question4(2, 3);

//Question 5

console.log("Question 5");

function question5(){
    let x;
    let y;
    function getNumbers(){
        x = prompt("Enter a number");
        y = prompt("Enter another number");
        parseInt(x);
        parseInt(y);
    }
    getNumbers();
    function calculateNumbers(x, y){
        return x*y;
    }
    let result = calculateNumbers(x, y);
    function displayNumbers(){
        console.log(`The sum of ${x} times ${y} is ${result}`);
    }
    displayNumbers();
}
question5();
    

