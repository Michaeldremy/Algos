var name = "Bob";
var isRaining = true;
var hasPet = false;
var job = "Web Developer";
var cash = 100;

//If it is raining, print "I need a coat" to the console, subtract 50 from money for a new coat, change isRaining to false 
if (isRaining == true){
    console.log ("I need a coat");
    cash -= 50;
    isRaining = false;
}
//If name is not "Bob" print "Hello stranger" to the console, otherwise print "Hello Bob" to the console. 
if (name == "Bob"){
    console.log ("Hello Bob");
}
else{
    (name == false)
    console.log ("Hello Stranger");
}
//If job is "Web Developer" print "Keep up the good work" to the console, add 500 to cash and change job to "Senior Web Developer" 
if (job == "Web Developer"){
    console.log("Keep up the good work");
    cash += 500;
    job = "Senior Web Developer"
}

//If we have no pet, change hasPet to true, and subtract 1500 from cash. 
if (hasPet == false){
    hasPet = true;
    cash -= 1500;
}
//If cash is greater than 1000, print "Vacation time!" to console and subtract 1200 from cash 
if (cash > 1000){
    console.log("Vacation time!");
    cash -= 1200;
}
//Print "Payday!" to the console and add 2000 to cash
console.log("Payday!");
cash = cash + 2000;

console.log("name " + name);
console.log("isRaining " + isRaining);
console.log("hasPet " + hasPet);
console.log("job " + job);
console.log("cash " + cash);