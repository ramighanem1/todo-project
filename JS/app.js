"use strict";



var Name = prompt("Please enter your name:");
console.log("Hello " + Name);

var Gender = prompt("Please enter your gender either 'male' or 'female':");
if (Gender != "male" && Gender != "female") {
    Gender = "Not Selected";
}
console.log("Your gender is " + Gender);


var Age = prompt("Please enter your age:");
if (Age <= 0) {
    alert("Invalid age. Age must be a positive number.");
} else {
    console.log("Your age is " + Age + ".");
}


var Skip = confirm("Do you want to skip the welcoming message?");
if (Skip != true) {
    if (Skip == false) {
        if (Gender === "male") {
            alert("Welcome Mr. " + Name);
        } else if (Gender === "female") {
            alert("Welcome Ms. " + Name);
        } else {
            alert("Welcome " + Name);
        }
    }
}




let question = ["Does a to-do list help you keep track of tasks and responsibilities","Is a to-do list a useful tool for time management","Can a to-do list improve your productivity and efficiency"]
var answerArray = new Array();
var questionAnswer = "";

function insertIntoArray(answerArray, questionAnswer) {
    answerArray.push(questionAnswer);
    return answerArray;
}

function answerQuestion(questionNumber) {
    questionAnswer = prompt(question[questionNumber] + " Please enter either 'Yes' or 'No':");
    if (questionAnswer == "") {
        questionAnswer = "invalid";
    }
    return questionAnswer;
}

function printArray(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

for (var i = 1; i <= 3; i++) {
    questionAnswer = answerQuestion(i);
    answerArray = insertIntoArray(answerArray, questionAnswer);
    questionAnswer = "";
}


printArray(answerArray);





