// task 1
// Write a function which takes a string and
// returns it written backwards (reverses it),
// logging the result to the console.

const reverseString = (newString) => {

    let myString = "cholerka!";
    return newString = myString.split("").reverse().join("");
};
console.log(reverseString());

// task 2
// create tic tac toe board and Write an if statement that checks 
// for all possible conditions of winning, whether it’s across in 
// one of the rows or columns, or diagonally. 

let board = [
    ['X', 'O', 'O'],
    [' ', 'X', ' '],
    [' ', ' ', 'X']
];   
         
    
let checkResult = (board, token) => { 
    let row1 = (board[0][0] == board[0][1] && board[0][2] == token)
    let row2 = (board[1][0] == board[0][1] && board[0][2] == token)
    let row3 = (board[2][0] == board[0][1] && board[0][2] == token)
    let col1 = (board[0][0] == board[1][0] && board[2][0] == token)
    let col2 = (board[0][1] == board[1][1] && board[2][1] == token)
    let col3 = (board[0][2] == board[1][2] && board[2][2] == token)
    let dia1 = (board[0][0] == board[1][1] && board[2][2] == token)
    let dia2 = (board[0][2] == board[1][1] && board[2][0] == token)

    return row1 || row2 || row3 || col1 || col2 || col3 || dia1 || dia2    
} 

let result = checkResult(board, 'X') ? "Result: X is the WINNER!" : checkResult(board, 'O') ? "Result: O is the WINNER!" : "Result: DRAW!"
console.log(result);
 
// task 3
// Write a JavaScript program to display the current day and time 

let d = new Date();
let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

document.getElementById("day").append(days[d.getDay()]);
document.getElementById("time").append(d.toLocaleString('en-US', { hour12: true, hour: 'numeric', minute: 'numeric', second: 'numeric' }));

// task 4
// Write a JavaScript program to find out if your birtday was on Tursday 

let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const bDayParsed = Date.parse("May 29, 1985");
let d = new Date(bDayParsed);
console.log(days[d.getDay()]);

// task 5
// Write a JavaScript program to find 1st January is 
// being a Sunday between 2014 and 2050.

for (let year = 2014; year <= 2050; year++) 
{
    let day = new Date(year, 0, 1);
	if (day.getDay() === 0) 
	    console.log(`1st January was a Sunday in ${year} year`)
}

// task 6
// Write a function called dataChecker which takes two parameters (string, rank).
// If the string is equal to ‘codenation’ and the rank is equal to 1 then
// log to the console a template string to tell us both are correct.
// If the string is ‘codenation’ but the rank isn’t 1 log to the console a
// template string that tells us the string was correct but the rank was wrong.
// Finally if the string was not equal to ‘codenation’ then log to the
// console a template string which tells us that the string was wrong.

const dataChecker = (string, rank) => {
	if (string == 'codenation' && rank == 1) 
		console.log('String and rank are correct')
	else if (string == 'codenation' && rank !== 1)
		console.log('String was correct but the rank was wrong')
	else 
		console.log('String was wrong')			
}
dataChecker('teapot', 666)

// task 7
// Write a JavaScript program where the program takes a random integer between 1 to 10, 
// the user is then prompted to input a guess number. If the user input matches with guess number, 
// the program will display a message "Good Work" otherwise display a message "Not matched". 


let randomInt = Math.floor(Math.random() * 11);

const myHeading = document.getElementById("heading");
const myInput = document.getElementById("input");
const myButton = document.getElementById("submit");

// like that
myButton.addEventListener("click",() => {
    if (myInput.value == randomInt) {
		document.getElementById("alert").innerHTML = "Good Work!!"
	} else {
		document.getElementById("alert").innerHTML = "Not matched!!"
	}
});

// or like that
const randomNumber = (event) => {
	if  (myInput.value == randomInt && event.target == myButton) 
		document.getElementById("alert").innerHTML = "Good Work!!"				
	 else 
		document.getElementById("alert").innerHTML = "Not matched!!"
	
}
window.addEventListener('click', randomNumber, false);

// task 7
// Write a JavaScript program to calculate days left until next Christmas.

const todaysDayParsed = new Date(Date.parse("June 18, 2021"));
const chistmasDayParsed = new Date(Date.parse("December 24, 2021"));
// The Date.parse() method parses a string representation of a date, and 
// returns the number of milliseconds since January 1, 1970

const timeDifference = chistmasDayParsed.getTime() - todaysDayParsed.getTime();
const day = (1000*60*60*24);

const daysLeftUntilChristmas = timeDifference/day;
console.log(Math.ceil(daysLeftUntilChristmas));