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

// task 4
// Write a JavaScript program to find 1st January is 
// being a Sunday between 2014 and 2050.

for (let year = 2014; year <= 2050; year++) 
{
	let day = new Date(year, 0, 1);
	if (day.getDay() === 0) 
		console.log(`1st January was a Sunday in ${year} year`)
}