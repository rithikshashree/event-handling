function StudentTable({ students, deleteStudent, editData }) {
  return (
    <div className="card">

      <h2>Student List</h2>

      <p className="student-count">
        Total Students: <strong>{students.length}</strong>
      </p>

      {students.length === 0 ? (
        <div className="empty-state">
          <h3>No Students Found</h3>
          <p>Add a student to see the details here.</p>
        </div>
      ) : (
        <div className="table-container">

          <table>

            <thead>

              <tr>
                <th>S.No</th>
                <th>Name</th>
                <th>Reg No</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Department</th>
                <th>Year</th>
                <th>Skills</th>
                <th>Action</th>
              </tr>

            </thead>

            <tbody>

              {students.map((student, index) => (

                <tr key={student.id}>

                  <td>{index + 1}</td>

                  <td>{student.name}</td>

                  <td>{student.regNo}</td>

                  <td>{student.email}</td>

                  <td>{student.mobile}</td>

                  <td>{student.department}</td>

                  <td>{student.year}</td>

                  <td>
                    {student.skills
                      .filter((skill) => skill.trim() !== "")
                      .join(", ")}
                  </td>

                  <td>

                    <div className="action-buttons">

                      <button
                        className="edit-btn"
                        onClick={() => editData(student)}
                      >
                        Edit
                      </button>

                      <button
                        className="delete-btn"
                        onClick={() => deleteStudent(student.id)}
                      >
                        Delete
                      </button>

                    </div>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>
      )}

    </div>
  );
}

export default StudentTable;