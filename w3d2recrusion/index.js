// HOMEWORK _RECURSION 

////////////////////////////////////////////////////////////////

exports.countDigits = countDigits;
exports.reverse = reverse;
exports.power = power;



function countDigits(n) {

    let count = 0;
    while (n > 0) {
        n = n % 10;
        count = count + n;
        n = Math.floor(n / 10);
    }
    if (count == 0) {
        return count;
    } else {
        return count;
    }




}


function reverse(arr) {
    let arr1 = [];
    for (let i = arr.length; i > arr[1]; i--) {
        arr1 = arr;

    }
    return arr1;

}

function power(y, n) {

    if (n == 0) {
        return 0;
    } else {
        return Math.pow(y, n);
    }

}