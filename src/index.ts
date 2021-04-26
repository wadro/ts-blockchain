console.log("run index.ts");

interface Human {
  name: string;
  age: number;
}
const person = {
  name: "jj",
  age: 1
};

const name = "kjh",
  age = 26;

const sayHi = (person:Human):string => {
  return `hi, ${name}, are you ${age}?`;
}
console.log(sayHi(person));
console.log("watch");

export{};
