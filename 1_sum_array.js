// Given var arr = [6,3,5,1,2,4], print each value and the sum so far
// Predicted output: Num 6, Sum 6, Num 3, Sum 9, Num 5, Sum 14, Num 1, Sum 15, Num 2, Sum 17, Num 4, Sum 21
// When you have solved this, create new values for your array and ensure it still works as expected.

var arr = [6,3,5,1,2,4];
var sum = 0;
for (var num = 0; num < arr.length;num++){
    console.log("Num", + arr[num]);
    sum += arr[num];
    console.log("Num", + sum);
}
// Predicted output: Num 6, Sum 6, Num 3, Sum 9, Num 5, Sum 14, Num 1, Sum 15, Num 2, Sum 17, Num 4, Sum 21

// Another Array test
var arr = [2,11,3,0,5,8];
var sum = 0;
for (var num = 0; num < arr.length;num++){
    console.log("Num", + arr[num]);
    sum += arr[num];
    console.log("Sum", + sum);
}

// Predicted output: Num 2, Sum 2, Num 11, Sum 13, Num 3, Sum 16, Num 5, Sum 21, Num 8, Sum 29