const userNameInput = document.getElementById("name")
const submitButton = document.getElementById("btn")
const result = document.getElementById("result")
const error = document.getElementById("error")

submitButton.addEventListener("click", function() {
    error.textContent = ""
    console.log("Button CLicked")

    let userName = userNameInput.value.trim()

    if (userName === "") {
        error.textContent = "Please Input Name Field"
        return
    } else if (userName.length <= 2) {
        error.textContent = "Please Enter More than 3 Characters "
        return
    }
   

    result.textContent = `Hello ${userName}, your Body Mass Index is ___. This is considered ____.`

})










































// // string
// let firstName = "Akeel"

// console.log("Hello " + firstName)


// // firstName = "Not Akeel"

// // console.log("Hello " + firstName)



// let age = 24

// console.log("your Age " + age)

// console.log("Hello " + firstName + " your age is " + age)
// console.log(`Hello ${firstName} your age is ${age}`)


// // Numbers:
// let length = 16;
// let weight = 7.5;

// // Strings:
// let color = "Yellow";
// let lastName = "Johnson";

// // Booleans
// let isMale = true


// // Object:
// const person = {firstName:"John", lastName:"Doe", isMale: true, cars: []};

// // Array object:
// const cars = ["Saab", "Volvo", "BMW"];

// // Date object:
// const date = new Date("2022-03-25");


// // Formula: weight (lb) / [height (in)]2 x 703




