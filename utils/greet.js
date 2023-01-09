// exporting a function
export function greetPerson(name) {
  return `Hello ${name}`;
}

// importing greetPerson from greet.js file
import { greetPerson } from "./greet.js";

// import { greet } from "/.greet.js";

// renaming import inside module.js
// default export
export default function greet(name) {
  return `Hello ${name}`;
}

export const age = 23;

import { age } from "./greet.js";
