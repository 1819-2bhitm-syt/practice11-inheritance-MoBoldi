const Person = require("./person");
const Teacher = require("./teacher");
const Student = require("./student");

const p = new Person("Richard", "Roe", "male", ["reading"]);
console.log();
p.sayHello();
p.tellHobbies();

const t = new Teacher("Jane", "Doe", "female", [], "programming");
console.log();
t.sayHello();
t.tellHobbies();

const s = new Student("John", "Smith", "male", ["cooking", "swimming", "travelling"], "history");
console.log();
s.sayHello();
s.tellHobbies();