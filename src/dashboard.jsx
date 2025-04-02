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
        <h1>Dashboard - De alumnos del TEC</h1>
      </header>
      <section>
        <h2>Año de ingreso</h2>
        <table border="1" style={{ width: "100%", textAlign: "center" }}>
          <thead>
            <tr>
              <th>Año</th>
              <th>Numero de Estudiantes</th>
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
