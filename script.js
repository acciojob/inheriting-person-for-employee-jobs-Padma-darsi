// complete this js code
// Person class definition
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
};

// Employee class definition (inherits from Person)
function Employee(name, age, jobTitle) {
  // Call the parent constructor
  Person.call(this, name, age);
  this.jobTitle = jobTitle;
}

// Inherit from Person
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.jobGreet = function () {
  console.log(
    `Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`
  );
};

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
