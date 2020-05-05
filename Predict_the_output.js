//Problem 1
function greeting(){
        return "Hello";
        console.log("World");
    }
    var word = greeting();
    console.log(word);
//Output: Hello

//Problem 2
function add(num1, num2){
        console.log("Summing Numbers!");
        console.log("num1 is: " + num1);
        console.log("num2 is: " + num2);
        var sum = num1 + num2;
        return sum;
    }
    var result1 = add(3,5);
    var result2 = add(4,7);
    console.log(result1);
    console.log(result2);
    //Output: Summing Numbers! num1 is: 3 num2 is: 5 Summing Numbers! num1 is: 4 num2 is: 7 8 11

    //Problem 3
    function addingPositions(numbers){
            console.log("Starting array:" + numbers);
            for(var i=0; i<numbers.length-1; i++){
                numbers[i+1] = numbers[i] + numbers[i+1];    
            }
            return numbers;
        }
        var arr = [7,3,8,4,2,0,1];
        var changedArr = addingPositions(arr);
        console.log(changedArr)
    //Output: Starting array:7,3,8,4,2,0,1 [7,10,18,22,24,24,25]
    /*Due to catenation we don't have [] around the first set of numbers called. If we wanted
    a [] around the numbers we would need to change the first console.log to console.log("Starting array:", numbers);
    */