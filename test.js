// Task 1: Write a Javascript function to extract unique characters from string.

function uniqueString(str){
    let uniqueChar = "";

    for (let i = 0; i < str.length; i++) {
        if (uniqueChar.indexOf(str[i]) === -1) {
            uniqueChar += str[i];
        }
    }

    return uniqueChar;
}

console.log(uniqueString('assvghyyuuulonnnm'));

// Task 2: Write a Javascript function to get all occurrences of each character in string

function charOccurrences(str){
    let countCharOcc = {};

    for (let i = 0; i < str.length; i++) {
        let getChar = str[i];
        let count = countCharOcc[getChar];

        if(count) {
            countCharOcc[getChar] = count + 1;
        } else countCharOcc[getChar] = 1;

        console.log(getChar + " Occurrences=" +
            countCharOcc[getChar]);
    }
    
    return countCharOcc;
}

charOccurrences('assvghyyuuulonnnm');

// Task 3: Write a Javascript function to merge 2 given arrays, and remove duplicates
// example
// arr1 = [1,2,3], arr2 = [2,30,1]
// output = [3,2,30,1]

function union(arr1, arr2){
    let arr3 = [...arr1, ...arr2];
    let arr4 = [];

    for (let i = 0; i < arr3.length; i++) {
        if(arr4.indexOf(arr3[i]) === -1) {
            arr4.push(arr3[i])
        }
    }

    return arr4;
}

console.log(union([1,2,3,5], [3,4,5,6]));