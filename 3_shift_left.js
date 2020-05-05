// Given an array, shift all values one position to the left.  Change the final position to 0. Return the changed array
// Predicted Output: shiftLeft([1,2,3,4,5]) should return [2,3,4,5,0];

function shiftLeft(arr){
    var shift = 1;
    for (var i = 0; i < arr.length;i++){
        if (arr[i+shift] == undefined){
            arr[i] = 0;
            } 
            else{
                arr[i] = (arr[i+shift]);
            }
        }
        return arr;
    }
var resultArr = shiftLeft([1,2,3,4,5]);
console.log(resultArr);

// Given an array, shift all values one position to the left.  Change the final position to 0. Return the changed array
// Predicted Output: shiftLeft([1,2,3,4,5]) should return [2,3,4,5,0];

function shiftLeft(arr){
    var shift = 1;
    for (var i = 0; i < arr.length;i++){
        if (arr[i+shift] == undefined){
            arr[i] = 0;
            } 
            else{
                arr[i] = (arr[i+shift]);
            }
        }
        return arr;
    }
var resultArr = shiftLeft([1,2,3,4,5]);
console.log(resultArr);
