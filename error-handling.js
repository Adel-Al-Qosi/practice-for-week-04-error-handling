// 1.
function sum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

try {
  let res = sum(null);
  console.log(res);
} catch (error) {
  console.error(error.message);
}

// 2.
// tests
// Your code here
function sayName(name) {
  if (typeof name === "string") {
    console.log(name);
  } else {
    throw TypeError("Invalid name! Must be a string");
  }
}

try {
  sayName("Alex");
  sayName(1);
} catch (error) {
  console.error(error.message);
}

// 3.
function greet(greeting) {
  if (!greeting) {
    throw new Error("There was no greeting given.");
  }

  console.log(greeting);
}

try {
  greet(false);
} catch {
  console.log("Hello World!");
}
