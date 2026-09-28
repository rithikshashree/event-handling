import { useState, useEffect } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import StudentForm from "./components/StudentForm";
import StudentTable from "./components/StudentTable";
import SearchBar from "./components/SearchBar";

function App() {

  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");
  const [editStudent, setEditStudent] = useState(null);

  // Load students from Local Storage
  useEffect(() => {
    const savedStudents = localStorage.getItem("students");

    if (savedStudents) {
      setStudents(JSON.parse(savedStudents));
    }
  }, []);

  // Save students to Local Storage
  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  // Add or Update Student
  function addStudent(student) {

    if (editStudent) {

      const updatedStudents = students.map((item) =>
        item.id === editStudent.id ? student : item
      );

      setStudents(updatedStudents);
      setEditStudent(null);

    } else {

      setStudents([...students, student]);

    }
  }

  // Delete Student
  function deleteStudent(id) {

    if (window.confirm("Are you sure you want to delete this student?")) {

      const updatedStudents = students.filter(
        (student) => student.id !== id
      );

      setStudents(updatedStudents);

    }

  }

  // Edit Student
  function editData(student) {

    setEditStudent(student);

  }

  // Search Student
  const filteredStudents = students.filter((student) =>

    student.name.toLowerCase().includes(search.toLowerCase()) ||

    student.regNo.toLowerCase().includes(search.toLowerCase())

  );

  return (

    <div className="app">

      <Navbar />

      <main className="container">

        <StudentForm
          addStudent={addStudent}
          editStudent={editStudent}
        />

        <SearchBar
          search={search}
          setSearch={setSearch}
        />

        <StudentTable
          students={filteredStudents}
          deleteStudent={deleteStudent}
          editData={editData}
        />

      </main>

      <Footer />

    </div>

  );

}

export default App;