// Create an algorithm that will loop from 1 to 30
// If a number is divisible by 3 it will print "Fizz"
// if a number is divisible by 5 it will print "Buzz"
// If a number if divisible by 3 AND 5 it will print "FizzBuzz"
// If it is not divisible by either the number will print out

//The expected output will be 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz .... etc 

for (var i=1; i<=30;i++){
    if (i % 3 == 0 && i % 5 == 0){
        console.log("FizzBuzz");
    }
    if(i%3==0){
        console.log("Fizz");
}
    else if (i%5==0){
    console.log("Buzz");
}
    else{
    console.log(i);
    }
}