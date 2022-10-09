/*
// let a = 10;
// a = a+1 
// a += 1
// a++
// let b = a++
// let c = ++a
// c = --a
// c = a--
// console.log("b is ",b);
// console.log("c is ",c);
// console.log("a is ",a);
let num1 = 10;
let num2 = "10"
let num3 = 100
if(num1 == 5){
    console.log(5);
}else if(num1 == 6){
    console.log(6);
}else if(num1 == 7){
    console.log(7);
}else if(num1 == 8){
    console.log(8);
}else{
    console.log("num1 is",num1);
}
if(num1 === 10 && num2 === 10 ){
    console.log("=");
}else{
    console.log("!=");
}
if(num1 === 10 || num2 === 910 ){
    console.log("=");
}else{
    console.log("!=");
}

//double equal check only value
//triple equal check datatype and value
// if(num1 == num2){
//     console.log("equal");
// }else{
//     console.log("!=");
// }

// if(num1 === num2){
//     console.log("equal");
// }else{
//     console.log("!=");
// }
*/
// tanary operator
// let name = "bobo";
// name == "bobo" ? console.log("true") : console.log("false");
// //nullish coalescing operator
// let fruit;
// let res = fruit ?? "🍍"
// console.log(res);
// for (let i = 0; i < 10; i++) {
//   if (i == 5) continue;
//   if (i == 7) break;
//   console.log("hello", i);
// }
// let users = ["bobo", "mgmg", "nono", "rose", "koko"];
// for (let i = 0; i < users.length; i++) {
//   let user = users[i];
//   if (user == "nono") continue;
//   console.log(`my name is ${user}`);
// }
let users = ["bobo", "mgmg", "nono", "rose", "koko"];
let i = 0;
while (i < users.length) {
  console.log(users[i]);
  i++;
}
let t = 100;
do {
  console.log("t is ", t);
  t++;
} while (t < 10);
