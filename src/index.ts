console.log("run index.ts");

interface Human {
  name: string;
  age: number;
  id?: number;
}
const person = {
  name: "jj",
  age: 1,
  // id: 1,
};

const name = "kjh",
  age = 26;

const sayHi = (person:Human):string => {
  return `hi, ${person.name}, are you ${person.age}?`;
}
console.log(sayHi(person));
console.log("watch");

export{};
