import React, { useContext } from 'react';
import { TasksContext } from '../../context/TasksContext';
import './Filters.css';

export const Filters = () => {
  const {
    selectedFilter,
    changeFilter,
    selectedCategory,
    changeCategory
  } = useContext(TasksContext);

  const handleFilterChange = (e) => {
    changeFilter(e.target.value);
  };

  const handleCategoryChange = (e) => {
    changeCategory(e.target.value);
  };

  return (
    <section className='filters-section'>
      <div>
        <label>Filter by:</label>
        <select onChange={handleFilterChange} value={selectedFilter}>
          <option value='all'>All</option>
          <option value='completed'>Completed</option>
          <option value='pending'>Pending</option>
        </select>
      </div>

      <div>
        <label>Categories:</label>
        <select onChange={handleCategoryChange} value={selectedCategory || ''}>
          <option value=''>All</option>
          <option value='home'>Home</option>
          <option value='university'>University</option>
          <option value='personal'>Personal</option>
        </select>
      </div>
    </section>
  );
};
