import * as CryptoJs from "crypto-js";
import { abort } from "process";

console.log("run index.ts");

interface Human {
  name: string;
  age: number;
  id?: number;
}

class HumanClass {
  public name: string;
  public age: number;
  private id?: number;
  constructor(name: string, age: number, id?: number) {
    this.name = name;
    this.age = age;
    this.id = id;
  }
}

class Block {

  static calculateBlockHash = (
    index: number, previousHash: string, timestamp: number, data: string): string => {
      return CryptoJs.SHA256(index+previousHash+timestamp+data).toString();
  }
  static validateStructure =(aBlock:Block):boolean => {
    console.log(`index, previous hash, hash, timestamp, data::: ${typeof aBlock.index ==="number"&&typeof aBlock.previousHash==="string"&&typeof aBlock.hash === "string"&&typeof aBlock.timestamp==="number"&&typeof aBlock.data==="string"}`);
    console.log(`is that true??? ${
      (typeof aBlock.index ==="number") && (aBlock.hash ==="string") 
    && (typeof aBlock.previousHash === "string") 
    && (typeof aBlock.timestamp === "number") && (typeof aBlock.data==="string")}`);

    console.log(true&&true&&true&&true&&true);
    
    // return typeof aBlock.index ==="number"&&typeof aBlock.previousHash==="string"&&typeof aBlock.hash === "string"&&typeof aBlock.timestamp==="number"&&typeof aBlock.data==="string";

    return typeof aBlock.index ==="number" && typeof aBlock.hash ==="string" && typeof aBlock.previousHash === "string" && typeof aBlock.timestamp === "number" && typeof aBlock.data==="string";
  }
   

  public index: number;
  public hash: string;
  public previousHash: string;
  public data: string;
  public timestamp: number;

  sayHello = () => { return "hello"; }
  // create

  constructor(index: number,
    hash: string,
    previousHash: string,
    data: string,
    timestamp: number) {
    this.index = index;
    this.hash = hash;
    this.previousHash = previousHash;
    this.data = data;
    this.timestamp = timestamp;
  }
}
const genesisBlock: Block = new Block(0, "0x00", "", "", 0);
// const blockchain: [Block] = [genesisBlock]
const blockchain: Block[] = [genesisBlock];
const getBlockchain = ():Block[] => blockchain;
const getLatestBlock = ():Block => blockchain[blockchain.length-1];
const getTimestamp = ():number => Math.round(new Date().getTime() / 1000);

const createNewBlock = (data:string):Block =>{
  const previousBlock:Block = getLatestBlock();
  const newIndex: number = previousBlock.index +1;
  const newTimestamp: number = getTimestamp();
  const newHash: string = Block.calculateBlockHash(newIndex,previousBlock.hash,newTimestamp,data);
  const newBlock:Block = new Block(newIndex,newHash,previousBlock.hash,data,newTimestamp);
  // blockchain.push(newBlock);
  addBlock(newBlock);
  return newBlock;
}
const getHashOfBlock = (aBlock:Block):string => 
  Block.calculateBlockHash(
    aBlock.index,
    aBlock.previousHash,
    aBlock.timestamp,
    aBlock.data
  );


const isVaildBlock = (candidateBlock:Block,previousBlock:Block):boolean =>{
  if(!Block.validateStructure(candidateBlock)){
    console.log("not valid structure");
    return false;
  } else if (previousBlock.index +1 !== candidateBlock.index){
    console.log("not valid index");
    return false;
  } else if (previousBlock.hash !== candidateBlock.previousHash ){
    console.log("not valid previous hash");
    return false;
  } else if (getHashOfBlock(candidateBlock) !== candidateBlock.hash){
    console.log("not valid hash");
    return false;
  } else{
    return true;
  }
}
// isVaildBlock();
const addBlock = (candidateBlock:Block):void =>{
  if(isVaildBlock(candidateBlock,getLatestBlock())){
    getBlockchain().push(candidateBlock);
  }
}

console.log(genesisBlock.sayHello());

console.log(blockchain);
// blockchain.push()
console.log(createNewBlock("second block"),createNewBlock("third block"),"end");
createNewBlock("fourth block")
console.log("four?");
console.log(getBlockchain());


const person = {
  name: "jj",
  age: 1,
  // id: 1,
};
const lynn = new HumanClass("Lynn", 30, 2);

const name = "kjh",
  age = 26;

const sayHi = (humanInf?: Human, humanClass?: HumanClass): string => {
  if (humanClass != undefined) {
    return `is inf ${humanInf}? hi, ${humanClass.name}, are you ${humanClass.age}?`;
  } else {
    return `is class ${humanClass}?  hi, ${humanInf.name}, are you ${humanInf.age}?`;
  }
}
console.log(sayHi(person, lynn));
console.log(sayHi(person));
console.log("watch");

export { };
