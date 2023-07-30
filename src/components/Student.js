import Button from './Button';

export default function Student({
  student,
  onDeleteStudent,
  selectedUserId,
  onSelectUserId,
}) {
  return (
    <li>
      <span>{student.name}</span>
      <div className="buttons">
        <Button onClick={() => onSelectUserId(student.id)}>
          {student.id === selectedUserId ? 'Cancel' : 'Select'}
        </Button>
        <Button onClick={() => onDeleteStudent(student.id)} danger>
          Delete
        </Button>
      </div>
    </li>
  );
}
