import Grade from './Grade';

export default function GradesList({ selectedStudent, onDeleteGrade }) {
  return (
    <div className="grades-list">
      {selectedStudent.grades.length === 0 ? (
        <h2>{selectedStudent.name} has no grades yet.</h2>
      ) : (
        <>
          <h2>{selectedStudent.name}'s grades</h2>
          <ul>
            {selectedStudent.grades.map((grade) => (
              <Grade
                grade={grade}
                onDeleteGrade={onDeleteGrade}
                key={grade.id}
              />
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
