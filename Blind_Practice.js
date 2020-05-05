// given some number, print "adding up" to the console and add from 1 up to that numnber and return the sum
// Predcted output: sigma(5) should return 15   (I.E: 1+2+3+4+5 =15)

function sigma(num){
    sum = 0;
    for(var i=0;i<=num;i++){
        sum = sum + i;
    }
    return sum;
}
var sum = sigma(5);
console.log(sum);


// Given an array and a number y, count and return how many numbers in the array are bigger than y.
// Predcted output: greaterThanY([1,6,8,3,5,2], 4) should return 3

function greaterThanY(arr, y){
    var count = 0;
    for(var i=0;i<arr.length;i++){
        if(arr[i] > y){
            count++;
        }
    }
    return count;
}
var result = greaterThanY([1,6,8,3,5,2], 4);
console.log(result);

// given some number, print "adding up" to the console and add from 1 up to that numnber and return the sum
// Predcted output: sigma(5) should return 15   (I.E: 1+2+3+4+5 =15)
function sigma(num){
    var sum = 0;
    for(var i=0; i<=num;i++){
        sum = sum + i;
    }
    return sum;
}
var sum = sigma(5);
console.log(sum);

// Given an array and a number y, count and return how many numbers in the array are bigger than y.
// Predcted output: greaterThanY([1,6,8,3,5,2], 4) should return 3

function greaterThanY(arr, y){
    var count = 0;
    for(var i = 0; i < arr.length;i++){
        if(arr[i] > y){
            count++;
        }
    }
    return count;
}
var result = greaterThanY([1,6,8,3,5,2], 4);
console.log(result);

// Given an array, shift all values one position to the left.  Change the final position to 0. Return the changed array
// Predicted Output: shiftLeft([1,2,3,4,5]) should return [2,3,4,5,0];

function shiftLeft(arr){
    var shift = 1;
    for(var i =0; i<arr.length;i++){
        if (arr[i + shift] == undefined){
            arr [i] = 0;
            console.log(arr[i]);
        }
        else{
            arr [i] = (arr[i + shift]);
        }
    }
    return arr;
}
var resultArr = shiftLeft([1,2,3,4,5]);
console.log(resultArr);
