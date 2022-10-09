let obj = {};
console.log(obj);
let person = {
	username: "bobo",
	email: "bobo@gmail.com",
	gender: "male",
	age: 20,
	hobby: ["reading", "running", "sleeping", "tennis"],
	address: {
		city: "yangon",
		township: "latha",
		street: "19 street",
	},
	sayhi(){
		console.log(this);
		return `my name is ${this.username}`
	}
};
//object destructure 
// let {username,email,gender,hobby,address} = person;
// console.log(username);
// console.log(email);
// console.log(hobby[3]);
// console.log(address.city);
// console.log(person.sayhi());
// let user1 = person;
// user1.username = "rose"
// console.log(user1.sayhi());
// console.log(person);
// console.log(person.age);
// console.log(person.hobby);
// console.log(person.address);
// console.log(person["username"]);
// console.log(`my name is ${person.username}`);

let users = [
	{ id: 1, name: "bobo", email: "bobo@gmail.com",gender:"male",age:20 },
	{ id: 2, name: "mgmg", email: "mgmg@gmail.com",gender:"male",age:26 },
	{ id: 3, name: "koko", email: "koko@gmail.com",gender:"male",age:34 },
	{ id: 4, name: "momo", email: "momo@gmail.com",gender:"female",age:24 },
	{ id: 5, name: "nono", email: "nono@gmail.com",gender:"female",age:30 },
	{ id: 6, name: "popo", email: "popo@gmail.com",gender:"female",age:40 },
];
// console.log(users);
// console.log(users[0].name);
// let toJson = JSON.stringify(users);
// console.log(toJson);
// let toArray = JSON.parse(toJson)
// console.log(toArray);

const dice = {
	sides: 6,
	roll(count) {
		i = 0;
		let a = [];
		let b = [];
		while (i < count) {
			//dice start 1
			let res = Math.floor(this.sides * (Math.random())) + 1;
			if (res <= 3) {
				a.push(res)
			} else {
				b.push(res)
			}
			i++;
		}
		console.log(`a win ${a.length}`);
		console.log(`b win ${b.length}`);
		if(a.length === b.length ){
			console.log("Game is draw");
		}else{
			let w = (a.length > b.length) ? "a winner" : "b winner";
			console.log(w);
		}
	},
}
dice.roll(30)