import { useContext, useState } from "react";
import { StudentContext } from "../context/StudentContext";

const StudentItem = ({ student }) => {
    /// verileri aldigimiz props local state den geliyor.
  const { id, name, age, color, email } = student;

  const {students, setStudents} = useContext(StudentContext);


  // local state ile color degisimi icin local state:
  // const [userColor, setUserColor] = useState(color);

  /// local state icin func:
  // const handleChange = (e) => {
  //   setUserColor(e.target.value);
  // };

      // asagida e.target.value olarak gönderdigimiz veriyi burada color olarak yakaliyoruz.
      // biz input ile color inda degisiklik yapilan ilgili veriyi yakalamak icin bir func yaziyoruz.

  
  const handleChange = (id, color) => {
    setStudents(students.map((student) => {
      return (
        student.id === id ? {...student, color : color} : student
          // filter ve map muhakkak birsey return eder. Bu nedenle burada && kullanamayiz. cünkü  birsey olmadiginda aksi durumda ne return edilecek bunu belirtmek zorundayiz.
      )
    } ))
  };
    // Önemli: burada handleChange func i local de tanimladik. eger baska yerlerde kullanacak ise bu func i global de tanimlayip farkli yerlerde kullanabiliriz. Bu durumda globalden sadece bu func i cekmemiz yeterlidir.

    return (
      <div
        style={{
          // background: userColor,
          background: color,
          paddingBottom: "2rem",
          paddingTop: "1rem",
          marginBottom: "1rem",
        }}
      >
        <h3>NAME:{name}</h3>
        <h4>EMAIL:{email}</h4>
        <h4>AGE:{age}</h4>
        Color:
        <input
          type="text"
          name="color"
          value={color}
          // onChange={handleChange}  local state icin
          onChange={(e) => handleChange(id, e.target.value) }
        />
      </div>
    );
 
};

export default StudentItem;
