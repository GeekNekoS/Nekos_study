const textString = "Hello world!";
// console.log(textString.length);
// console.log(textString.toUpperCase());


function Person(name, age, year) {
    this.name = name;
    this.age = age;
    this.year = year;
}
const employee1 = new Person("Olga", "21", "2016");
const employee2 = new Person("Oleg", "32", "2010");
// console.log(employee1);
// console.log(employee2);


employee1.name = "Olesia"
employee2['name'] = "Ivan"
// console.log(employee1.name);
// console.log(employee2.name);


delete employee1.name;
// console.log(employee1.name);


const person = {
    'age': '19',
    'name': 'Neko'
};
// console.log(person.age);
// console.log(person.name);


person.sayAge = function() {
    console.log("Person is " + person.age + " years old");
};
// person.sayAge()


person.greetingPerson = function() {
    console.log("Hi " + person.name + "! How are you?");
};
// person.greetingPerson()


const newPerson = {
    name: "Ivan",
    age: 25,
    hiredYear: 2017
};
newPerson.sayName = function() {
    console.log("My name is " + this.name);
}
// newPerson.sayName()


const nextNewPerson = {
    name : "Ivan",
    age : 25,
    hiredYear : 2017
}
nextNewPerson.sayAll = function() {
    for (let i in this) {
        console.log(i + " is " + this[i] + "\n");
  }
}
// nextNewPerson.sayAll()
