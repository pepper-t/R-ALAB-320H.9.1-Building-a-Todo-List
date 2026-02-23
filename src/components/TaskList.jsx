

import { useState } from 'react';

export default function TaskList({ tasks, onChangeTask, onDeleteTask }) {
  return (
    <ul className='tasklist'>
      {tasks.map(task => (
        <li key={task.id}>
          <Task task={task} onChange={onChangeTask} onDelete={onDeleteTask} />
        </li>
      ))}
    </ul>
  );
}

function Task({ task, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    
    <>
      <input
        type="checkbox"
        checked={task.done}
        onChange={e => onChange({ ...task, done: e.target.checked })}
      />
      {isEditing ? (
        <input
          value={task.text}
          onChange={e => onChange({ ...task, text: e.target.value })}
        />
      ) : (
        <span>{task.text}</span>
      )}
      
      <button onClick={() => setIsEditing(!isEditing)}>
        {isEditing ? 'Save' : 'Edit'}
      </button>
    
      <button onClick={() => onDelete(task.id)} disabled={!task.done}>Delete</button>
      
    </>
    
    
  );
}