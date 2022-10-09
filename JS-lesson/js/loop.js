let users = [
  { id: 1, name: "bobo", email: "bobo@gmail.com", gender: "male", age: 20 },
  { id: 2, name: "mgmg", email: "mgmg@gmail.com", gender: "male", age: 26 },
  { id: 3, name: "koko", email: "koko@gmail.com", gender: "male", age: 34 },
  { id: 4, name: "momo", email: "momo@gmail.com", gender: "female", age: 24 },
  { id: 5, name: "nono", email: "nono@gmail.com", gender: "female", age: 30 },
];

//map ,filter, reduce
let name = users.map((u) => u.name);
console.log(name);
let email = users.map((u) => u.email);
console.log(email);
let user = users.filter((u) => u.gender === "female").map((u) => u.email);
console.log(user);
let points = [22, 34, 5454, 55, 5, 756, 6778, 44, 2, 50];
let total = points.reduce((a, b) => a + b, 100);
console.log(total);
/*
for (const user of users) {
  console.log(user.name);
}
for (const i in users) {
  console.log(users[i].email);
}
users.forEach((user) => {
  //   console.log(user);
  if (user.age > 30 ) {
    console.log("above 20 user name is", user.name);
  }
});

for (let i = 0; i < users.length; i++) {
  const user = users[i];
  //   console.log(user.name);
  if (user.gender === "male") {
    console.log(
      `my name is Mr.${user.name} and age is ${user.age} gender is ${user.gender}`
    );
  } else {
    console.log(
      `my name is Ms.${user.name} and age is ${user.age} gender is ${user.gender}`
    );
  }
}
*/
