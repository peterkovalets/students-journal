export default function Grade({ grade, onDeleteGrade }) {
  const formattedDate = new Intl.DateTimeFormat(navigator.language, {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date(grade.date));

  return (
    <li>
      <span>{grade.grade.toUpperCase()}</span>
      <span>{grade.subject[0].toUpperCase() + grade.subject.substring(1)}</span>
      <span>{formattedDate}</span>
      <span onClick={() => onDeleteGrade(grade.id)} className="delete">
        &times;
      </span>
    </li>
  );
}
