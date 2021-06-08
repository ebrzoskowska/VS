// task 4
// find out if your birthday was on Thursday

let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const bDayParsed = Date.parse("May 29, 1985");
let d = new Date(bDayParsed);
console.log(days[d.getDay()]);