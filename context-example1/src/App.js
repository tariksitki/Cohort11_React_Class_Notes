import { useState } from "react";
import StudentList from "./components/StudentList";
import { StudentContext } from "./context/StudentContext";
import data from "./data";

function App() {
  const [students, setStudents] = useState(data);

  return (
    // value gönderiminde cift {} kullanilir
    <StudentContext.Provider value={{ students, setStudents }}>
      <div>
        <StudentList students={students} />
      </div>
    </StudentContext.Provider>
  );
}
export default App;
