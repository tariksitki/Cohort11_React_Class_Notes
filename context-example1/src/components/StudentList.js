import { useContext } from 'react';
import { StudentContext } from '../context/StudentContext';
import StudentItem from './StudentItem';

// const StudentList = ({ students }) => {
const StudentList = () => {
    // bizim context provider in value sunda gönderdigimiz veri object formatinda oldugu icin burada {} ile destructure yaptik 
  const {students} = useContext(StudentContext);
  // console.log(students);

      /// global state kullandigimizda ayni zamanda local state de kullanilabilir. Biz burada global den veri cektik ve bunu local ile alt component lara gönderdik.
      /// tam tersi olarak. alt component da hem local den hem de global den veri alabilir. 
      // En effective cözüm:  sadece global veriler globalden gelsin diger tüm veriler local state lerden gelsin. 
  return (
    <div>
      {students.map((student) => (
        <StudentItem key={student.id} student={student} />
      ))}
    </div>
  );
};

export default StudentList;
