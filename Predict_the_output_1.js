// This is the first prompt
var name = "Bruce";
if (name != "Bruce") {    
    console.log("What's your name?");
} else {    
    console.log("Hello, Bruce!");
}
// Output of the first prompt
// Hello Bruce!


//This is the second prompt
var num1 = 10;
if(num1 == 20){
    console.log("Num is 20");
}
else{
    console.log("Adding 5");
    num1 = num1 + 5;
}
if(num1 == 15){
    console.log("Adding another 5")
    num1 = num1 + 5;
} 
else if(num1 == 20) {
    console.log("Now it is 20");
}
// This is the output of the second prompt
//Adding 5
//Adding another 5


// This is the third prompt
var num2 = 10;
if(num2 % 2 == 0){
    console.log("Divisible by 2");
    num2 = num2 * 3;
}
if(num2 % 3 == 0){
    console.log("Divisible by 3");
    num2 = num2 / 2;   
}
else if(num2 % 5 == 0){
    console.log("Divisible by 5");
    num2 = num2 * 7;
}
if(num2 % 7 == 0){
    console.log("Divisible by 7");
    num2 = num2 - 10;
}
else{
    console.log("Almost there!")
    num2 = num2 / 2;
}
console.log(num2);

// This is the output of the third prompt
// Divisible by 2
// Divisible by 3
// Almost there!
// 7.5