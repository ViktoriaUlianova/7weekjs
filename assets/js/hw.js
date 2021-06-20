// function bike() {
//     console.log(this.name)
// }

// var name = "ninja";

// var obj1 = {
//     name: "pomidor",
//     bike: bike
// }

// var obj2 = {
//     name: "site",
//     bike: bike
// }


// bike()

// obj1.bike()
// obj2.bike()

const person = {
    name: "Valera",
    age: 23
}
// let city = person.city 
person.city = "Amsterdam";
console.log(person)

// class Age {
//     constructor(age, foo) {
//         this.age = age;
//         this.foo = foo;
//     }
// }

// class Cat {
//     constructor(name, surname) {
//         this.name = name;
//         this.surename = surname;
//         this._age = new Age(3, 'foo');
//     }
//     get firstNameCapital() {
//         return this.name.toUpperCase();
//     }
//     setAge(value) {
//         if (value instanceof Number && value < 100) {
//             this._age = value
//         }
//     }
//     get fullName() {
//         return `${this.name} ${this.surename}`;
//     }
//     get age() {
//         return this._age;
//     }
//     set age(value) {
//         if (value instanceof Number && value < 100) {
//             this._age = value
//         }
//     }
//     set fullName(value) {
//         [this.name, this.surename] = value.split('');
//     }
// }


// let cat = new Cat("Barsik", "Ivanov")
// cat.age = -330000
// cat.age = 5000000
// cat.age = 'old';

// console.log(cat.age)
// cat.age = 400;
// cat.age = '99';
// console.log(cat.age)
// //Cat.fullName = "Snejok Petrov";

// console.log(cat.firstNameCapital);
// console.log(cat.fullName);
// console.log(cat.toTitle());