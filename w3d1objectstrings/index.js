//Which of the following are destructive array methods?



//a. pop                     
//e. splice
//f. concat
//g. reverse
//h. join
//i. forEach
//j. sort
//b. push                       
//c. shift

////d. slice
//e. splice
//f. concat
//g. reverse
//h. join
//i. forEach
//j. sort
/////


// answer

//2  2. Write a function findMin that takes an array as a parameter and returns the minimum value.
//Use a for .. of loop. 

let arr = [1, 2, 3, , 4, 5]

function findmin(arr) {
    let min = a[0];
    for (let i = 0; i <= arr.length; i++) {
        if (a[i] < min) {
            min = a[i];
        }

    }
    return min;

}
// Write a function sumOddIndicesValues that takes an array as a parameter and returns the sum
//of values on the odd indices. 
//let arr = [1, 2, 3, , 4, 5, 6];

function findmin(arr) {
    let sum = 0;
    for (let i = 0; i <= arr.length; i++) {
        if (i % 2 == 1) {
            sum = sum + a[i];
        }

    }
    return sum;

}

// 3Write a function sumArrays, that takes two arrays as parameters (you can assume of same
//length) then returns a new array by adding two array values at the corresponding indices. 
let arr1 = [1, 2, 3, ]
let arr2 = [1, 2, 3, ]
let arr3 = [];

function sumaarays(arr1, arr2) {
    for (let i = 0; i <= arr1.length - 1; i++) {
        arr3[i] = arr1[i] + arr2[i];

    }
    return arr3;
}


// object strings exercise the

cosnt sam1 = {
        name = " jphn";
        age = 10;
    }
    ////////cd