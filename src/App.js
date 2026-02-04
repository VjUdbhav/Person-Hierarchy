import React from "react";
import PersonCard from "./components/PersonCard";

import Person from "./models/Person";
import Student from "./models/Student";
import Teacher from "./models/Teacher";

function App() {
  
  const person = new Person("Erwin Schrodinger", 80);
  const student = new Student("Udbhav Vijay", 19, "AI-ML");
  const teacher = new Teacher("prof. Parasdeep Singh", 30, "Machine Learning");

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>Person Class Hierarchy</h1>

      <PersonCard person={person} role="Person" />
      <PersonCard person={student} role="Student" />
      <PersonCard person={teacher} role="Teacher" />
    </div>
  );
}

export default App;
