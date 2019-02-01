function Person(firstName, lastName, gender, hobbies) {
    this.name = {
        first: firstName,
        last: lastName
    }
    this.gender = gender;
    this.hobbies = hobbies;
}
Person.prototype.sayHello = function () {
    console.log("Hello. My name is " + this.name.first + " " + this.name.last + ".")
}
Person.prototype.tellHobbies = function () {
    switch (this.hobbies.length){
        case 1: console.log("My only hobby is "+this.hobbies[0]+".");break;
        case 0: console.log("I have no hobbies.");break;
        default: console.log("My hobbies are:");
        for (i = 0; i < this.hobbies.length; i++){
            console.log(" - "+this.hobbies[i]);
        }
    }
}

module.exports = Person;