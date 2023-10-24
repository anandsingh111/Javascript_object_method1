const obj1 = {
  name: "anand",
  age: 42,
  branch: "ECE"
};
const obj3 = {
  age: 42,
  branch: "ECE"
};
const data = Object.values(obj1);

const result = data.join(", ");
console.log(result);
console.log(typeof result);

let obj2 = !obj3.name && obj1.age ? delete obj3.age : "";
// if (obj1.name) {
//   const data12 = { state: "bihar" };
//   obj1.push(data12);
// };
// if (obj1?.name) {
//   const result12 = { ...obj1, state: "bihar" };
//   console.log(result12);
// }

// "name" in obj1 ? (obj1.state = "bihar") : (obj1.j = "j");
console.log(obj3);
