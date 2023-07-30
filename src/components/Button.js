export default function Button({ children, onClick, danger }) {
  return (
    <button onClick={onClick} className={`btn ${danger ? 'danger' : ''}`}>
      {children}
    </button>
  );
}
