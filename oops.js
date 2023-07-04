// let person={
//     firstname:"Shantanu",
//     lastname:"Shubham",

//     getFullName: function () {
//         return 'The name of the person is ${persoon.firstname} ${person.lastname}';
//     },
//     phonenumber:{
//         mobile:"123456",
//         landline:"6789",
//     },
// };
// console.log(person.getFullName());
// console.log(person.phonenumber.landline);
// function person(firstname,lastname){
//     this.firstname=firstname;
//     this.lastname=lastname;
// }
// let person1=new person("Shantanu","Shubam");
// let person2=new person("Anurag","Mishra");
// console.log(person1.firstname);
// console.log('${person2.firsname} ${person2.lastname}')
// const coder={
//     isStudying:false,
//     printIntroduction: function(){
//         console.log('My name is ${this.name}, Am I studying?: ${this.isStudying}');
//     },
// };
// const me=Object.create(coder);
// me.name="Shantanu Shubham";
// me.isStudying=true;
// me.printIntroduction();
// class vehicle{
//     constructor(name,maker,engine){
//         this.name=name;
//         this.maker=maker;
//         this.engine=engine;
//     }
//     getDetail(){
//         return `The name of the vehicle is ${this.name}`;
//     }
// }
// let v1=new vehicle("creta","Hyundai","250cc");
// let v2=new vehicle("qs","Audi","300cc");
// console.log(v1.name);
// console.log(v2.maker);
// console.log(v1.getDetail());

// function vehicle(name,maker,engine){
//     this.name=name;
//     this.maker=maker;
//     this.engine=engine;
// }
// vehicle.prototype.getdetaile=function(){
//     console.log(`The name of the vehicle is ${this.name}`);
// }
// let v1=new vehicle("creta","Hyundai","250cc");
// let v2=new vehicle("qs","Audi","300cc");
// console.log(v1.name);
// console.log(v2.maker);
// console.log(v1.getDetail());

class person{
    constructor(name,id){
        this.name=name;
        this.id=id;
    }
    addaddress(newaddress){
        this.address=newaddress;
    }
    getDetails(){
        console.log(`Name is: ${this.name}, and address is: ${this.address}`);
    }
}
let person1=new person("Shantanu", 24);
person1.addaddress("kolkata");
person1.getDetails();