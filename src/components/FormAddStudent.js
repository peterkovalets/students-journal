import { useState } from 'react';
import Button from './Button';

export default function FormAddStudent({ onAddStudent }) {
  const [name, setName] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    if (!name) return;

    const newStudent = {
      id: crypto.randomUUID(),
      name,
      grades: [],
    };
    onAddStudent(newStudent);

    setName('');
  }

  return (
    <form className="form-add-students" onSubmit={handleSubmit}>
      <label className="label">Name</label>
      <input
        type="text"
        className="input"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Peter"
      />
      <Button>Add</Button>
    </form>
  );
}
