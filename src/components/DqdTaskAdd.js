import React, { useState, useEffect } from 'react';

export default function DqdTaskAdd({ dqdOnSubmit, taskToEdit }) {
  const initialTask = { 
    dqd_taskId: 0, 
    dqd_taskName: "",
    dqd_level: "" 
  };

  const [dqdTask, setDqdTask] = useState(initialTask);

  useEffect(() => {
    if (taskToEdit) {
      setDqdTask(taskToEdit);
    } else {
      setDqdTask(initialTask);
    }
  }, [taskToEdit]);

  const dqdHandleChange = (dqdEvent) => {
    const { name, value } = dqdEvent.target;
    setDqdTask(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const dqdHandleSubmit = (dqdEvent) => {
    dqdEvent.preventDefault();
    dqdOnSubmit(dqdTask);
  };

  return (
    <div>
      <h2>{taskToEdit ? 'Sửa Task' : 'Thêm mới task'}</h2>
      <form onSubmit={dqdHandleSubmit}>
        <div>
          <label>Task ID</label>
          <input 
            type='number'
            name='dqd_taskId' 
            value={dqdTask.dqd_taskId} 
            onChange={dqdHandleChange} 
            disabled={taskToEdit !== null}
          />
        </div>
        <div>
          <label>Task Name</label>
          <input 
            type='text'
            name='dqd_taskName' 
            value={dqdTask.dqd_taskName} 
            onChange={dqdHandleChange} 
          />
        </div>
        <div>
          <label>Task Level</label>
          <select 
            name='dqd_level' 
            value={dqdTask.dqd_level} 
            onChange={dqdHandleChange}
          >
            <option value='Small'>Small</option>
            <option value='Medium'>Medium</option>
            <option value='High'>High</option>
          </select>
        </div>
        <button type='submit'>Ghi lại</button>
      </form>
    </div>
  );
}