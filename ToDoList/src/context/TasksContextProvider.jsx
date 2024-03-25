import React, { useState, useReducer} from 'react'
import { TasksContext } from "./TasksContext"
import PropTypes from 'prop-types'
import { TaskReducer } from '../reducers/taskReducer'

const initialState = JSON.parse(localStorage.getItem('tasks')) ?? []

export function TasksContextProvider({ children }){

  const [tasks, dispatch] = useReducer(TaskReducer, initialState)
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const addTask = (text,category) => {
    const newTask = {
      id: Date.now(),
      text,
      category,
      completed: false
    }

    const addAction = {
      type: 'add',
      payload: newTask
    }

    dispatch(addAction)
  }

  const deleteTask = (id) => {
    const deleteAction = {
      type: 'delete',
      payload: id
    }

    dispatch(deleteAction)
  }

  const toggleCompleted = (id, checked) => {
    console.log('changing toggle')
    const toggleAction = {
      type: 'change-toggle',
      payload: {
        id, checked
      }
    }

    dispatch(toggleAction)
  }

  const changeFilter = (value) => {
    setSelectedFilter(value);
  };
  
  const changeCategory = (value) => {
    setSelectedCategory(value);
  };

  const clearAllCompletedTasks = () => {
    const deleteAllCompletedAction = {
      type: 'delete-all-completed'
    }

    dispatch(deleteAllCompletedAction)
  }

  const filteredTasks = tasks.filter((task) => {
    if (selectedFilter === 'completed') {
      return task.completed;
    }
    if (selectedFilter === 'pending') {
      return !task.completed;
    }
    if (selectedCategory && selectedCategory !== 'all') {
      return task.category === selectedCategory;
    }
    return task;
  });

  const allTasks = tasks.length
  const completedTasks = tasks.filter(task => task.completed === true).length

  return(
    <TasksContext.Provider value={{
        tasks,
        selectedFilter,
        selectedCategory,
        filteredTasks,
        addTask,
        deleteTask,
        toggleCompleted,
        changeFilter,
        changeCategory,
        clearAllCompletedTasks,
        allTasks,
        completedTasks
    }}>
      {children}
    </TasksContext.Provider>
  )
}

TasksContextProvider.propTypes = {
  children: PropTypes.object.isRequired
}