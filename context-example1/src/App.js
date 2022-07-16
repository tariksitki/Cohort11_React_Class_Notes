import { useState } from 'react';
import StudentList from './components/StudentList';
import { StudentContext } from './context/StudentContext';
import data from './data';

function App() {
  const [students, setStudents] = useState(data);

  const changeColor = (id, color) => {
    setStudents(
      students.map((student) => {
        return student.id === id ? { ...student, color: color } : student;
        // map ve filter muhakkak birsey return eder. bu nedenle : dan sonra null dersek null return eder. bu nedenle student dedik.
        // burada color:color key ve value ismi ayni oldugu icin sadece color yazmakta yeterli ama bu sekilde daaha okunakli.
      })
    );
  };

  return (
    <div>
      {/* <StudentList students={students} /> */}
      {/* <StudentContext.Provider value={{ students, setStudents }}> */}
      <StudentContext.Provider value={{ students, changeColor }}>
        <StudentList />
      </StudentContext.Provider>
    </div>
  );
}
export default App;
