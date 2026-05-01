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
  username : "charan"
}
const copy = { ...original };
copy.username = "meghana"
console.log("COPY",copy.username); // Meghana
console.log("ORIGINAL",original.username); //charan 



// for nested objects if we do spread it points to same reference
const original = {
  username : {
    name : "charan"
  }
}
const copy = { ...original };
copy.username.user = "meghana"
console.log("COPY",copy.username.user); // Meghana
console.log("ORIGINAL",original.username.user); //meghana