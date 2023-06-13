import React from 'react';

const TaskItem = ({ task, completed, onDelete, onToggle }) => {
  const handleDelete = () => {
    onDelete();
  };

  const handleToggle = () => {
    onToggle();
  };

  return (
    <li>
      <table>
      {task}
      <span className={completed ? 'completed' : ''}>
        <button onClick={handleToggle}>Completed</button>
      </span>
      <button onClick={handleDelete}>Delete</button>
      </table>
    </li>
  );
};

export default TaskItem;
