import { useState, useEffect } from "react";

function StudentForm({ addStudent, editStudent }) {
  const initialStudent = {
    id: "",
    name: "",
    regNo: "",
    email: "",
    mobile: "",
    gender: "",
    department: "",
    year: "",
    address: "",
    skills: [""],
    terms: false,
  };

  const [student, setStudent] = useState(initialStudent);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (editStudent) {
      setStudent(editStudent);
    } else {
      setStudent(initialStudent);
    }
  }, [editStudent]);

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;

    setStudent({
      ...student,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSkillChange = (index, value) => {
    const skills = [...student.skills];
    skills[index] = value;

    setStudent({
      ...student,
      skills,
    });
  };

  const addSkill = () => {
    setStudent({
      ...student,
      skills: [...student.skills, ""],
    });
  };

  const removeSkill = (index) => {
    if (student.skills.length === 1) return;

    const skills = student.skills.filter((_, i) => i !== index);

    setStudent({
      ...student,
      skills,
    });
  };

  const validate = () => {
    let err = {};

    if (!student.name.trim()) err.name = "Enter Student Name";

    if (!student.regNo.trim()) err.regNo = "Enter Register Number";

    if (!student.email.includes("@"))
      err.email = "Enter Valid Email";

    if (!/^[0-9]{10}$/.test(student.mobile))
      err.mobile = "Enter 10 digit Mobile Number";

    if (!student.gender)
      err.gender = "Select Gender";

    if (!student.department)
      err.department = "Select Department";

    if (!student.year)
      err.year = "Select Year";

    if (!student.terms)
      err.terms = "Accept Terms";

    setErrors(err);

    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    addStudent({
      ...student,
      id: student.id || Date.now(),
    });

    setStudent(initialStudent);
    setErrors({});
  };

  return (
    <div className="card">

      <h2>Student Registration</h2>

      <form onSubmit={handleSubmit}>

        <div className="form-group">
          <label>Student Name</label>

          <input
            type="text"
            name="name"
            value={student.name}
            onChange={handleChange}
            placeholder="Enter Student Name"
          />
        </div>

        <p className="error">{errors.name}</p>

        <div className="form-group">
          <label>Register Number</label>

          <input
            type="text"
            name="regNo"
            value={student.regNo}
            onChange={handleChange}
            placeholder="Enter Register Number"
          />
        </div>

        <p className="error">{errors.regNo}</p>

        <div className="form-group">
          <label>Email</label>

          <input
            type="email"
            name="email"
            value={student.email}
            onChange={handleChange}
            placeholder="Enter Email"
          />
        </div>

        <p className="error">{errors.email}</p>

        <div className="form-group">
          <label>Mobile Number</label>

          <input
            type="tel"
            name="mobile"
            value={student.mobile}
            onChange={handleChange}
            placeholder="Enter Mobile Number"
          />
        </div>

        <p className="error">{errors.mobile}</p>

        <div className="form-group">

          <label>Gender</label>

          <div className="radio-group">

            <label>
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={student.gender === "Male"}
                onChange={handleChange}
              />
              Male
            </label>

            <label>
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={student.gender === "Female"}
                onChange={handleChange}
              />
              Female
            </label>

          </div>

        </div>

        <p className="error">{errors.gender}</p>

        <div className="form-group">

          <label>Department</label>

          <select
            name="department"
            value={student.department}
            onChange={handleChange}
          >
            <option value="">Select Department</option>
            <option>AI&DS</option>
            <option>CSE</option>
            <option>IT</option>
            <option>ECE</option>
            <option>EEE</option>
          </select>

        </div>

        <p className="error">{errors.department}</p>

        <div className="form-group">

          <label>Year</label>

          <select
            name="year"
            value={student.year}
            onChange={handleChange}
          >
            <option value="">Select Year</option>
            <option>I Year</option>
            <option>II Year</option>
            <option>III Year</option>
            <option>IV Year</option>
          </select>

        </div>

        <p className="error">{errors.year}</p>

        <div className="form-group">

          <label>Skills</label>

          <div style={{ width: "100%" }}>

            {student.skills.map((skill, index) => (

              <div className="skill-row" key={index}>

                <input
                  type="text"
                  value={skill}
                  placeholder="Enter Skill"
                  onChange={(e) =>
                    handleSkillChange(index, e.target.value)
                  }
                />

                <button
                  type="button"
                  className="remove-btn"
                  onClick={() => removeSkill(index)}
                >
                  Remove
                </button>

              </div>

            ))}

            <button
              type="button"
              className="add-btn"
              onClick={addSkill}
            >
              + Add Skill
            </button>

          </div>

        </div>

        <div className="form-group">

          <label>Address</label>

          <textarea
            rows="4"
            name="address"
            value={student.address}
            onChange={handleChange}
            placeholder="Enter Address"
          ></textarea>

        </div>

        <div className="checkbox">

          <input
            type="checkbox"
            name="terms"
            checked={student.terms}
            onChange={handleChange}
          />

          <label>I agree to the Terms & Conditions</label>

        </div>

        <p className="error">{errors.terms}</p>

        <button className="submit-btn" type="submit">
          {editStudent ? "Update Student" : "Register Student"}
        </button>

      </form>

    </div>
  );
}

export default StudentForm;