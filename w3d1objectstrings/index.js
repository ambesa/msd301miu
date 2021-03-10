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

// class exercis 

//2  2. Write a function findMin that takes an array as a parameter and returns the minimum value.
//Use a for .. of loop. 

//et arr = [1, 2, 3, , 4, 5]

//function findmin(arr) {
// let min = a[0];
//     for (let i = 0; i <= arr.length; i++) {
// if (a[i] < min) {
//min = a[i];
//}

//}
//return min;

//}
// Write a function sumOddIndicesValues that takes an array as a parameter and returns the sum
//of values on the odd indices. 
//let arr = [1, 2, 3, , 4, 5, 6];

/*function findmin(arr) {
//    let sum = 0;
    for (let i = 0; i <= arr.length; i++) {
        if (i % 2 == 1) {
            sum = sum + a[i];
        }

    }
    return sum;

}

// 3Write a function sumArrays, that takes two arrays as parameters (you can assume of same
//length) then returns a new array by adding two array values at the corresponding indices. 
//let arr1 = [1, 2, 3, ]
//let arr2 = [1, 2, 3, ]
//let arr3 = [];


// answerfunction sumaarays(arr1, arr2) {
//for (let i = 0; i <= arr1.length - 1; i++) {
//   arr3[i] = arr1[i] + arr2[i];

//}
//return arr3;
////}


// object strings exercise the

//cosnt sam1 = {
//      name = " jphn";
//age = 10;
// }
////////cd
*/

///########## HOME- WORK#################

exports.isPersonEqual = isPersonEqual;
exports.countProperties = countProperties;
exports.checkspam = checkspam;
exports.suffix = suffix;
exports.tittlecase = tittlecase;
exports.getAverageAge = getAverageAge;
exports.sumFirst = sumFirst;



//let car = {
//   make: toyota,
//   medele: camry,

//};
//console.log(car);
//car.model = rava4;
//delete car.model;


// question number 2 the
function isPersonEqual(obj1, obj2) {

    if (obj1.name == obj2.name) {
        return true;
    } else if (obj1.age == obj2.age) {
        return true
    } else {
        return false;
    }


}

// question 2 count properties of
function countProperties(obj) {
    let count = 0;
    for (let i = 0; i <= obj.length; i++) {
        count = count + i

    }
    return count;

}

//   quetion number 3
function checkspam(str) {

    for (let i = 0; i <= str.length; i++) {
        if (str == " lottery" || str == "prize") {
            return true;
        } else {
            return false;
        }
    }

}

// quetion number 4
function suffix(arr1, arr2) {

    for (let i = 0; i <= arr1.length - 1; i++) {
        for (let j = 0; j <= arr2.length - 1; j++) {

            if (arr1.length - 1 == arr2.length - 1 && arr1.length - 2 == arr2.length - 1) {
                return true;
            } else {
                return false;
            }
        }
    }

}
// quetion number 5

function tittlecase(str) {
    let capital = '';
    capital = str.charAt(0).toUpperCase() + str.slice(1)
    return capital;
}


// quetion number 6
function getAverageAge(obj1, ob2) {
    let average = (obj1.age + obj2.age) / 2
    return average;

}

//quetion number 7
function sumFirst(arr1, arr2) {
    let sum = 0;
    for (let i = 0; i <= arr1.length - 1; i++) {
        for (let j = 0; j <= arr2.length - 1; j++) {
            sum = arr1[0] + arr2[0];

        }
        return sum;

    }

}