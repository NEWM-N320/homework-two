//getting elements and writing their htmls

//get the h1 tag and write its text inside
document.getElementsByTagName("h1")[0].innerHTML += "Callback Functions";

//get the h2 tag that needs the current date
document.getElementsByTagName('h2')[0].innerHTML += "September 12, 2023";

//get the h2 tag that needs my name
document.getElementsByTagName("h2")[1].innerHTML += "Zaydee Dominguez-Chang";


//this function takes the 2 nums, the sum, avg, and displays it using template literals
const numberPar = (num1, num2, sum, avg) => {
        let numDisplay = `
        <p>Numbers Chosen: ${num1} , ${num2}</p>
        <p>Sum of Numbers: ${sum}</p>
        <p>Average: ${avg}</p>`
document.write(numDisplay);
}


//displayInfo calculates the sum and avg of two numbers, and passes the information to the callback function
const displayInfo = (num1, num2, callback ) => {

        //figure out sum of numbers
        let sum = num1 + num2;

        //figure out the average
        let avg = sum / 2;

        //let the avg be fixed to two decimal places only
        acg = avg.toFixed(2);

        //the callback should display the 2 numbers, the sum, and the average
        callback(num1, num2, sum, avg);
}

//give a random number every time the function is ran
let oneNum = Math.floor(Math.random()* 10) +1;
let twoNum = Math.floor(Math.random()* 30) +1;

//invoke the function with its parameters
displayInfo(oneNum, twoNum, numberPar);