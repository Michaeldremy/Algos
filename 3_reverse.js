// Given var arr = [8,6,7,5,3,0,9] reverse the array and print the result
// Predicted output: [9,0,3,5,7,6,8]
// When you have solved this, create new values for your array and ensure it still works as expected.

// First option to reverse an array
var temparr = [];
var arr = [8,6,7,5,3,0,9];
for (var i = arr.length -1; i >= 0; i--){
    temparr.push(arr[i]);
}
    arr = temparr;
    console.log(arr);

// Second option to reverse and array
var arr = [8,6,7,5,3,0,9];
var arr_Midindex = arr.length / 2;
for(var i = 0; i < arr_Midindex; i++){
    var temp = arr[i];
    arr[i] = arr[arr.length-1-i];
    arr [arr.length-1-i] = temp;
}
console.log(arr);