import { useState } from 'react';
import Header from './Header';
import StudentsList from './StudentsList';
import FormAddStudent from './FormAddStudent';
import GradesList from './GradesList';
import FormAddGrade from './FormAddGrade';

function App() {
  const [students, setStudents] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const selectedStudent = selectedUserId
    ? students.find((student) => student.id === selectedUserId)
    : null;

  function handleAddStudent(student) {
    setStudents((students) => [...students, student]);
  }

  function handleDeleteStudent(id) {
    const student = students.find((student) => student.id === id);
    const shouldDelete = window.confirm(
      `Are you sure you want to delete ${student.name}?`
    );

    if (shouldDelete) {
      if (id === selectedUserId) setSelectedUserId(null);
      setStudents((students) =>
        students.filter((student) => student.id !== id)
      );
    }
  }

  function handleSelectUserId(id) {
    setSelectedUserId(id === selectedUserId ? null : id);
  }

  function handleDeleteGrade(id) {
    setStudents((students) =>
      students.map((student) =>
        student.id === selectedUserId
          ? {
              ...student,
              grades: student.grades.filter((grade) => grade.id !== id),
            }
          : student
      )
    );
  }

  function handleAddGrade(grade) {
    setStudents((students) =>
      students.map((student) =>
        student.id === selectedUserId
          ? { ...student, grades: [...student.grades, grade] }
          : student
      )
    );
  }

  return (
    <div className="app">
      <Header />
      <aside className="sidebar">
        <StudentsList
          students={students}
          selectedUserId={selectedUserId}
          onDeleteStudent={handleDeleteStudent}
          onSelectUserId={handleSelectUserId}
        />
        <FormAddStudent onAddStudent={handleAddStudent} />
      </aside>
      <main>
        {selectedUserId && (
          <GradesList
            selectedStudent={selectedStudent}
            onDeleteGrade={handleDeleteGrade}
          />
        )}
        {selectedUserId && <FormAddGrade onAddGrade={handleAddGrade} />}
      </main>
    </div>
  );
}

export default App;
