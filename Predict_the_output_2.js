var num1 = 10;
var num2 = 5;
if(num1 % num2 == 0){
    num1 += 3;
    num2 += 4;
}
else if(num1 % 2 == 0){
    num1 = num2 / 3;
}
else{
    num2 = num1 / 2;
}
if(num1 == 13){
    num1 = num1 / 2;
    num2 = Math.trunc(num1);
}
if(num2 % 3 == 0){
    num1 += 4.5;
}
else{
    num1 -= 2;
}
console.log(num1);
console.log(num2);

// Output of code
// 11
// 6