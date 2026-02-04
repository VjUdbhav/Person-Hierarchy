import Person from "./Person";

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }

  // Method Overriding (Polymorphism)
  introduce() {
    return `Hello, my name is ${this.name} and I'm studying ${this.major}.`;
  }
}

export default Student;
