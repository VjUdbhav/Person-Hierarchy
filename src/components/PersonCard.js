import React from "react";

const PersonCard = ({ person, role }) => {
  return (
    <div style={styles.card}>
      <h2>{person.name} ({role})</h2>
      <p><strong>Age:</strong> {person.age}</p>
      <p style={styles.italic}>{person.introduce()}</p>

      {role === "Student" && (
        <p><strong>Major:</strong> {person.major}</p>
      )}

      {role === "Teacher" && (
        <p><strong>Teaching:</strong> {person.subject}</p>
      )}
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "20px",
    margin: "20px 0",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
  },
  italic: {
    fontStyle: "italic",
    color: "#555"
  }
};

export default PersonCard;
