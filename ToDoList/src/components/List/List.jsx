import React, { useContext } from 'react';
import { Task } from './Task/Task';
import { TasksContext } from '../../context/TasksContext';

export const List = () => {
  const { filteredTasks, onToggleCompleted, deleteTask } = useContext(
    TasksContext
  );

  return (
    <section className='list'>
      {filteredTasks.length !== 0 ? (
        filteredTasks.map(({ id, text, category, completed }) => (
          <Task
            key={id}
            text={text}
            category={category}
            id={id}
            completed={completed}
            onToggleCompleted={() => onToggleCompleted(id)}
            deleteTask={deleteTask}
          />
        ))
      ) : (
        'No Tasks to Show'
      )}
    </section>
  );
};
