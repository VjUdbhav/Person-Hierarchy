import Person from "./Person";

class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }

  // Method Overriding
  introduce() {
    return `Hello, my name is ${this.name} and I teach ${this.subject}.`;
  }
}

export default Teacher;
