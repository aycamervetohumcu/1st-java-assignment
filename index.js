console.log("Hello World!");

let fname;
let age;
let colour;

fname = "Ayca Merve"; 
age = 36;
colour = "blue and green";
console.log(`My name is ${fname}, I am ${age} years old, and my favourite colours are ${colour}.`);

let income = 1000;
let rent = 300;
let parttime = 200;

let sharerent = rent / 2;  
let twoweekendincomes = parttime * 4; 
let totalincomes = twoweekendincomes + income; 

let rest = totalincomes - sharerent;  

console.log(`Shared Rent: ${sharerent}`);
console.log(`Two Weekend Incomes: ${twoweekendincomes}`);
console.log(`Remaining Money After Rent: ${rest}`);
