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




