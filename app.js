const reverseString = (newString) => {

    let myString = "cholerka!";
    return newString = myString.split("").reverse().join("");
};

console.log(reverseString());

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
 

let d = new Date();
let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

document.getElementById("day").append(days[d.getDay()]);

document.getElementById("time").append(d.toLocaleString('en-US', { hour12: true, hour: 'numeric', minute: 'numeric', second: 'numeric' }));


