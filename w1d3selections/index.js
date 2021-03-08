"use strict";

/*const prompt = require('prompt-sync')();
const weather = prompt(" what is nthe weather today");
if (weather === "rainy") {
    console.log(" get use umbrela ")

}*/
//const prompt = require('prompt-sync')();
/*let number = +prompt(" please enter a number from one to five ");
if (number === 1) {

    console.log(" one ")
} else if (number === 2) {
    console.log(" two")

} else {
    console.log(" not a numebr")
}*/

/*let sales = +prompt(" please enter sales");
//let commision;
let salaried = true;
if (salaried) {
    if (sales < 300) {
        cossole.log(" no commision");
    } else if (sales < 500) {
        console.log(" 1 percent commision" + 0.1 * sales);

    } else {
        console.log(" 1 percent commision" + 0.2 * sales);

    }
} */


// HOMEWORK -------//////

// # 1Write a program that helps a user choose the correct
//footwear for the day’s weather based on
//the table shown below. If the user enters any other weather type, 
//your program should output 
const prompt = require('prompt-sync')();

console.log(" ------QUESTION NUMBER 1---------")
let wth = prompt(" please enter weather type for today ");
if (wth === "hot") {

    console.log(" please wear sandals  ")
} else if (wth === "rain") {
    console.log("please wea galoshes ")

} else if (wth === "snow") {
    console.log("please wear boots ")

} else {
    console.log("  wear sneakers  ")
}

console.log(" ----- QUESTION NUMEBR 2---- ")


// Write a program that reads from the keyboard a student's name and number of completed
//credits and then outputs the student's name and label on following rules:
//a. "Freshman" if 0<credits<30
//b. "Sophomore" if 30<=credits<60
////c. "Junior" if 60<=credits<90
//d. "Senior" if credits>90
let name = prompt(" please enter your name:  ");


let crt = +prompt(" please enter your completed credit hours :  ");

if (crt > 0 && crt < 30) {

    console.log(" dear" + "" + name + " you are Freshman ")
} else if (crt >= 30 && crt < 60) {
    console.log(" Dear" + " " + name + " you are Sophomore ")

} else if (crt >= 60 && crt < 90) {
    console.log(" Dear" + " " + name + " you are Junior  ")

} else {
    console.log(" Dear" + "  " + name + " you are Senior ")
}

console.log(" -------- QUESTION NUMBER 3---------- ")

let cost = +prompt(" please enter total  cost of the house  :  ");
if (cost < 50000) {

    console.log(" your down payment is  " + cost * 0.05)
} else if (cost > 50000 && cost < 100000) {
    console.log(" your down payment is " + (cost * 0.10 + 1000))


} else if (cost > 100000 && cost < 200000) {
    console.log(" your down payment is " + (cost * 0.15 + 2000))


} else {
    console.log(" your down payment is  " + (cost * .10 + 5000))
}


console.log("  ---------QUESTION NUMBER 4")

let id = prompt(" please enter student or fuculty ");
let book = +prompt(" enter number of books over due ")

if (id == "student") {
    if (book == 0) {
        console.log(" 6 weeks loan period")
    } else if (book < 3 && book > 0) {
        console.log("  4 weeks loan period")
    } else {
        console.log(" 2 weeks loan period ")
    }
}
if (id == "fuculty") {
    if (book == 0) {
        console.log(" 12 weeks loan period")

    } else if (book <= 3) {
        console.log(" 10 weeks loan period ")

    } else {
        console.log(" 8 weeks loan period")
    }


} else {
    if (book == 0) {
        console.log(" 4 weeks loan period ")

    } else if (book <= 3) {
        console.log(" 3 week loan period")

    } else {
        console.log(" 2 week loan period ")
    }
}

console.log("----- QUESTION NUMBER 5-----")

let season = prompt(" please enter season  ");
let age = +prompt(" palese enter age  ")

if (age > 0 && age < 5) {
    if (season == "summer" && season == "fall") {
        console.log(" bedtime is 8.30pm")
    } else if (season == "winter" && season == "spring") {
        console.log(" bedtime is 8.00pm")

    }

}
if (age > 6 && age < 12) {
    if (season == "summer") {
        console.log(" bedtime is 9.00pm")
    } else if (season == "winter" && season == "spring" && season == "fall") {
        console.log(" bedtime is 8.30pm")

    }

} else {
    if (season == "summer") {
        console.log(" bedtime 10.30pm")

    } else if (season == "winter" && season == "spring" && season == "fall") {
        console.log(" bedtime is 9.30pm")

    }
}