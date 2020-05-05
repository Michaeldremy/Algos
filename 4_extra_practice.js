// Many algorithms have multiple valid solutions.
// If you have time, try coming up with a different approach/solution for reversing an array

// Second option to reverse and array
var arr = [8,6,7,5,3,0,9];
var arr_Midindex = arr.length / 2;
for(var i = 0; i < arr_Midindex; i++){
    var temp = arr[i];
    arr[i] = arr[arr.length-1-i];
    arr [arr.length-1-i] = temp;
}
console.log(arr);

// Sum from 1 to 10, printing out the number and current sum so far at each step of the way
// The expected output will be:
// Num: 1, Sum: 1, Num: 2, Sum: 3, Num: 3, Sum: 6, Num: 4, Sum: 10, Num: 5, Sum: 15 .... etc

sum = 0;
for(var i=0;i<=10;i++){
    console.log("sum", sum);
    console.log()
}

//Print out only odd numbers from 1 to 20
//The expected output will be 1, 3, 5, 7, 9, 11, 13, 15, 17, 19

for(var i =0;i<=20;i++){
    if(i%1==0);
    console.log(i);
}

for(var j = 1; j <= 15; j++){
    if(j % 2 == 0){
        j+=2
    }
    else if(j % 3 == 0){
        j++;
    }
    console.log(j);
}