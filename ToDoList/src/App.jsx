import './App.css';
import { Header, Form, Filters, List, Activity } from './components';
import React, { useEffect } from 'react';
import { saveStorage } from './hooks/taskStorage';
import { useTasks } from './hooks/useTasks';


function App() {
  const { tasks } = useTasks()
  useEffect(() => {
    saveStorage('tasks', tasks)
  }, [tasks])

  return (
    <>
      <Header />
      <div className='Activity'>
        <Filters/>
        <Activity/>
      </div>
      <Form/>
      <List/>
    </>
  );
}

export default App;
