import React from "react";

const Dashboard = () => {
  const studentData = [
    { year: 2020, students: 1200 },
    { year: 2021, students: 1350 },
    { year: 2022, students: 1500 },
    { year: 2023, students: 1600 },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <header style={{ marginBottom: "20px" }}>
        <h1>Dashboard - Student Enrollment</h1>
      </header>
      <section>
        <h2>Enrollment Data</h2>
        <table border="1" style={{ width: "100%", textAlign: "center" }}>
          <thead>
            <tr>
              <th>Year</th>
              <th>Number of Students</th>
            </tr>
          </thead>
          <tbody>
            {studentData.map((data, index) => (
              <tr key={index}>
                <td>{data.year}</td>
                <td>{data.students}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Dashboard;
