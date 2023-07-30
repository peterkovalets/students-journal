import { useState } from 'react';
import Button from './Button';

const subjects = [
  'math',
  'english',
  'history',
  'art',
  'physics',
  'chemistry',
  'biology',
  'geography',
];

const grades = ['a', 'b', 'c', 'd', 'f'];

export default function FormAddGrade({ onAddGrade }) {
  const [subject, setSubject] = useState('math');
  const [grade, setGrade] = useState('a');
  const [date, setDate] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    if (!date) return;

    const newGrade = {
      id: crypto.randomUUID(),
      subject,
      grade,
      date,
    };
    onAddGrade(newGrade);

    setSubject('math');
    setGrade('a');
    setDate('');
  }

  return (
    <form className="form-add-grade" onSubmit={handleSubmit}>
      <div className="fields">
        <div>
          <label className="label">Subject</label>
          <select
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="input"
          >
            {subjects.map((subject) => (
              <option value={subject} key={subject}>
                {subject[0].toUpperCase() + subject.substring(1)}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="label">Grade</label>
          <select
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
            className="input"
          >
            {grades.map((grade) => (
              <option value={grade} key={grade}>
                {grade.toUpperCase()}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="label">Date</label>
          <input
            type="datetime-local"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="input"
          />
        </div>
      </div>
      <Button>Add</Button>
    </form>
  );
}
