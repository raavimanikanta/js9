const obj=new Object() ;
    obj.name1="manikanta";
    obj.id=22;
    obj.college="pragati";

console.log(obj)

function Person (name,age,college) {
    this.name=name;
    this.age=age;
    this.college=college;
}
const newObj=new Person ("Varma" ,23,"Narayana")
console.log(newObj)

var obj2={
    name:"manikanta",
    age:23,
    college:"pragati"
}
console.log(Object.keys(obj2))


const objSpread={
    name:'manikanta',
    age:23,
}
 const objSpread2={
     ...objSpread,
     college:"Pragati"
 }
 console.log(objSpread2)
