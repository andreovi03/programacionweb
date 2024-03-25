import React, { useState } from 'react';
import { useTasks } from '../../hooks/useTasks';
import './Form.css';

export const Form = () => {
  const { addTask } = useTasks();
  const [text, setText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const isSubmitDisabled = text.length < 1;

  const updateText = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addTask(text, selectedCategory);
    setText('');
    setSelectedCategory('');
  };

  const onChangeText = (e) => {
    updateText(e);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <form onSubmit={onSubmit} className='form'>
      <input
        type='text'
        placeholder='Task'
        value={text}
        className='task-input'
        onChange={onChangeText}
      />

      <select value={selectedCategory} onChange={handleCategoryChange} className='category-select'>
        <option value=''>Select category</option>
        <option value='home'>Home</option>
        <option value='university'>University</option>
        <option value='personal'>Personal</option>
      </select>

      <input
        className='submit-input'
        type='submit'
        value='Add task'
        disabled={isSubmitDisabled}
      />
    </form>
  );
};
