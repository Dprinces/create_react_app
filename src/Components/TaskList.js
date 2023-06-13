import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onDelete, onToggle }) => {
  return (
    <ul>
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          task={task.task}
          completed={task.completed}
          onDelete={() => onDelete(index)}
          onToggle={() => onToggle(index)}
        />
      ))}
    </ul>
  );
};

export default TaskList;
