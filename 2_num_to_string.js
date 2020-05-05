// Given var arr = [10,3,6,9,4,13]
// change all numbers 10 or higher to "Big" and change numbers 5 or smaller to "Small" and print the result 
// Predicted output: ["Big","Small",6,9,"Small","Big"]
// When you have solved this, create new values for your array and ensure it still works as expected.

// Code for problem above!
var arr = [10,3,6,9,4,13]
for (var i=0; i< arr.length;i++){
    if (arr[i] <= 5){
        arr [i] = "Small";
    }
    else if(arr[i] >= 10){
        arr[i] = "Big";
    }
}
console.log(arr);
// Predicted output: ['Big', 'Small', 6, 9, 'Small', 'Big']

// Another Array test
var arr = [,3,7,8,16,4,19,14,3]
for (var i=0; i< arr.length;i++){
    if (arr[i] < 6){
        arr [i] = "Small";
    }
    else if(arr[i] > 9){
        arr[i] = "Big";
    }
}
console.log(arr);
// Predicted output: ['Small', 7, 8, Big', 'Small', 'Big', 'Big', 'Small']


//Print out only odd numbers from 1 to 20
//The expected output will be 1, 3, 5, 7, 9, 11, 13, 15, 17, 19

for(var i=0;i<21;i++){
    if(i % 2 != 0){
    console.log(i);
}
}

for(var i=1;i<21;i+=2)
console.log(i);