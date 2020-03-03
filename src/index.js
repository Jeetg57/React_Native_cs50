import "./styles.css";

// const object = {
//   "p_name": "Joseph",
//   "greet": () => console.log(object.p_name)
// }
// object.greet()

// const person2 = object

// person2.p_name = "Maria"
// object.greet()

let array = [2, 3, 4, 2, 3, 4, 2, 5, 6, 4, 3, 2, 43, 4, 3, 4, 3, 4, 3];

let array2 = array.map(add);

function add(x) {
  return (x *= 2);
}

console.log(array2);
//Reduce
let array3 = array.reduce(sum);

function sum(x, y) {
  return x + y;
}
console.log(array3);

let array4 = array.map((x, y) => {
  return y / x;
});
console.log(array4);
