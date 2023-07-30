import Student from './Student';

export default function StudentsList({
  students,
  onDeleteStudent,
  selectedUserId,
  onSelectUserId,
}) {
  return (
    <>
      {students.length === 0 ? (
        <p className="no-students">There's no students yet.</p>
      ) : (
        <ul className="students-list">
          {students.map((student) => (
            <Student
              student={student}
              onDeleteStudent={onDeleteStudent}
              selectedUserId={selectedUserId}
              onSelectUserId={onSelectUserId}
              key={student.id}
            />
          ))}
        </ul>
      )}
    </>
  );
}
