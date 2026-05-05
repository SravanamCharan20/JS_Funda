const obj = {
  a: 1,
  b: 2,
  c: 3,
};

Object.keys(obj).forEach((key) => {
  console.log(`key : ${key} : value: ${obj[key]}`);
});

// About Spread
// copy → new object (new pointer) ✅
// Nested objects inside → same reference (shared pointer)

// for objects if we do spread it creates a new copy object
const original = {
  username: "charan",
};
const copy = { ...original };
copy.username = "meghana";
console.log("COPY", copy.username); // Meghana
console.log("ORIGINAL", original.username); //charan

// for nested objects if we do spread it points to same reference
const original2 = {
  username: {
    name: "charan",
  },
};
const copy2 = { ...original2 };
copy2.username.user = "meghana";
console.log("COPY", copy2.username.user); // Meghana
console.log("ORIGINAL", original2.username.user); //meghana

// rest is used for the collecting the elements
// spread is used for the expanding the elements

function sum(...numbers) {
  return numbers.reduce((acc, it) => acc + it, 0);
}

console.log(sum(1, 2, 3, 4)); // rest opertion usage

const array = [1, 2, 3, 4, 5];
console.log(...array); // expanding usage by spread

// call and apply uses to invoke the functions but the only difference is apply takes arguments as in "array" format
function sum(a, b) {
  return a + b;
}

console.log(sum.call(null, 1, 2)); // 3
console.log(sum.apply(null, [1, 2])); // 3

//map function
const numbers = [1, 2, 3];
const doubled = numbers.map((it) => it * 2);
console.log(doubled);

// How do you add, remove, and update elements in an array?
const dummy_arr = [1,2,3,4]
dummy_arr.push(5)
dummy_arr.unshift(6)
console.log(dummy_arr);
dummy_arr.splice(0,2,1.5);
