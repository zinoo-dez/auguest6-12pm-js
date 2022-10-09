// var let const
// var is before ES6 version (global variable)
// let && const are ES6 version
// = is assignment operator(=)
/*
var apple = "apple";
apple = "Iphone";
console.log("apple is", apple);
var banana;
banana = "🍌";
console.log("banana is ", banana);
console.log(window);
// let a = "arrow";
// console.log(a);
var apple = 100;
let a = 20;
a = 300;
console.log(a);
const pi = 3.14;
pi = 400; // error
console.log(pi);
const b ; //error
console.log(b);
let bb;
console.log(bb); //undefined
*/
/*
 * multi-line comment
 */
// let & const are scope variable
var a = 10;
if (1 == 1) {
	var a = 1000;
	console.log("inside a is ", a);
}
console.log("outside a is ", a);
let aa = 10;
if (1 == 1) {
	let aa = 1000;
	console.log("inside aa is ", aa);
}
console.log("outside aa is ", aa);
const bb = 10;
if (1 == 1) {
	const bb = 1000;
	console.log("inside bb is ", bb);
}
console.log("outside bb is ", bb);
