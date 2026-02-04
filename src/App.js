import React from "react";
import PersonCard from "./components/PersonCard";

import Person from "./models/Person";
import Student from "./models/Student";
import Teacher from "./models/Teacher";

function App() {
  
  const person = new Person("Alex Johnson", 30);
  const student = new Student("Emma Watson", 20, "Computer Science");
  const teacher = new Teacher("Dr. James Wilson", 45, "Mathematics");

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
