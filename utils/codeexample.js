// variable declared using let
let name = "Sara";
{
  // can be accessed only inside
  let name = "Peter";

  console.log(name); // Peter
}
console.log(name); // Sara

// function expression using arrow function
let x = (x, y) => x * y;

const first_name = "Jack";
const last_name = "Sparrow";

console.log("Hello " + first_name + " " + last_name);

console.log(`Hello ${first_name} ${last_name}`);

const person = {
  name: "Sara",
  age: 25,
  gender: "female",
};

let { name, age, gender } = person;

console.log(name); // Sara
console.log(age); // 25
console.log(gender); // female

const x = (x, y) => x * y;

const x = (x, y) => {
  return x * y;
};

const numbers = [23, 55, 21, 87, 56];
let maxValue = Math.max(...numbers);

const people = [
  "Creola Katherine Johnson: mathematician",
  "Mario José Molina-Pasquel Henríquez: chemist",
  "Mohammad Abdus Salam: physicist",
  "Percy Lavon Julian: chemist",
  "Subrahmanyan Chandrasekhar: astrophysicist",
];
const listItems = people.map((person) => <li>{person}</li>);
return <ul>{listItems}</ul>;

function getScores() {
  return [70, 80, 90];
}
