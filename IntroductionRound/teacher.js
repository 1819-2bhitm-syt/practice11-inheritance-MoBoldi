const Person = require("./person");
function Teacher(firstName, lastName, gender, hobbies, subject){
    Person.call(this, firstName, lastName, gender, hobbies);
    this.subject = subject;
    //Hello. My name is Mrs. Doe and I teach programming.
}
Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;
Teacher.prototype.sayHello = function(){
    let text = "Hello. My name is "; 
    if (this.gender == "female"){
        text += "Mrs. ";
    }
    else {
        text+="Mr. ";
    }
    text+=this.name.last+" and I teach "+this.subject+".";
    console.log(text);
}
module.exports = Teacher;