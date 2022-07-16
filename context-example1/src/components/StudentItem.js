import { useContext } from "react";
import { StudentContext } from "../context/StudentContext";

const StudentItem = ({ student }) => {
  const { id, name, age, color, email } = student;
  const { students, setStudents } = useContext(StudentContext);

  const {changeColor} = useContext(StudentContext)

    //// changeColor önce burada tanimladik sonra app de tanimlayip context e attik. burada tanimlayinca sadece burada kullanilir. digerinde her yere gönderilebilir. 

  // const changeColor = (id, color) => {
  //   setStudents(students.map((student) => {
  //     return (
  //       student.id === id ? {...student, color : color } : student
  //       // map ve filter muhakkak birsey return eder. bu nedenle : dan sonra null dersek null return eder. bu nedenle student dedik.
  //       // burada color:color key ve value ismi ayni oldugu icin sadece color yazmakta yeterli ama bu sekilde daaha okunakli.
  //     )
  //   }));
  // }

  return (
    <div
      style={{
        background: student.color,
        paddingBottom: "2rem",
        paddingTop: "1rem",
        marginBottom: "1rem",
      }}
    >
      <h3>NAME:{name}</h3>
      <h4>EMAIL:{email}</h4>
      <h4>AGE:{age}</h4>
      Color:{" "}
      <input
        type="text"
        name="color"
        value={color}
        onChange={(e) => changeColor(id, e.target.value)}
      />
    </div>
  );
};

export default StudentItem;


// hocam bu students stateini context dosyasında tanımlamakla app te sarmalladığımız yerde tanımlamak arasında fark var mı?