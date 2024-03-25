import React, { useContext } from 'react';
import { Button } from '../Button/Button';
import { TasksContext } from '../../context/TasksContext';
import './Activity.css';

export const Activity = () => {
  const { allTasks, completedTasks, clearAllCompletedTasks } = useContext(
    TasksContext
  );

  return (
    <section className='activityButton'>
      <p>
        {completedTasks}{' '}
        {completedTasks <= 1 & completedTasks !== 0
          ? 'Task completed'
          : 'Tasks completed'}{' '}
        de {allTasks}{' '}
      </p>
      <Button
        type='clear-completed'
        text='Clear All Completed'
        handleClick={clearAllCompletedTasks}
        id={Date.now()}
        category=''
      />
    </section>
  );
};
