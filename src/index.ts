console.log("run index.ts");

interface Human {
  name: string;
  age: number;
  id?: number;
}

class HumanClass{
  public name: string;
  public age: number;
  private id?: number;
  constructor(name: string,age: number,id?:number){
    this.name = name;
    this.age = age;
    this.id = id;
  }
}

const person = {
  name: "jj",
  age: 1,
  // id: 1,
};
const lynn = new HumanClass("Lynn",30,2);

const name = "kjh",
  age = 26;

const sayHi = (humanInf?:Human,humanClass?:HumanClass):string => {
  if(humanClass != undefined){
    return `is inf ${humanInf}? hi, ${humanClass.name}, are you ${humanClass.age}?`;
  }else{
    return `is class ${humanClass}?  hi, ${humanInf.name}, are you ${humanInf.age}?`;
  }
}
console.log(sayHi(person,lynn));
console.log(sayHi(person));
console.log("watch");

export{};
