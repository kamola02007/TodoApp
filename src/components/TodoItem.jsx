import { useState } from 'react';

function TodoItem({ todo, toggleTodo, deleteTodo, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(todo.text);

  const handleSave = () => {
    if (text.trim()) {
      editTodo(todo.id, text);
      setIsEditing(false);
    }
  };

  return (
    <li className="todo-item">
      {isEditing ? (
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          onBlur={handleSave}
          onKeyDown={(e) => e.key === 'Enter' && handleSave()}
          autoFocus
        />
      ) : (
        <span
          onClick={() => toggleTodo(todo.id)}
          className={todo.done ? 'done' : ''}
        >
          {todo.text}
        </span>
      )}

      <div style={{ display: 'flex', gap: '4px' }}>
        <button onClick={() => setIsEditing(true)}>✏️</button>
        <button onClick={() => deleteTodo(todo.id)}>❌</button>
      </div>
    </li>
  );
}

export default TodoItem;
