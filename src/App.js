import React, { useState } from 'react';
import './App.css';
import DqdListTask from './components/DqdListTask';
import DqdTaskAdd from './components/DqdTaskAdd';

function App() {

  const dqd_listTasks = [
    { dqd_taskId:2210900015,dqd_taskName:"Đặng Quang Dũng", dqd_evel:"Small" },
    { dqd_taskId:1,dqd_taskName:"Học lập trình frontend", dqd_evel:"Small" },
    { dqd_taskId:2, dqd_taskName:"Học lập trình reactjs",dqd_evel:"Medium"},
    { dqd_taskId:3, dqd_taskName:"Lập trình với Frontend - Reactjs",dqd_evel:"High"},
    { dqd_taskId:4, dqd_taskName:"Lập trình Fullstack (PHP, Java, NetCore)",dqd_evel:"Small"},
   ];

   const [dqdlistTasks, setDqdListTasks ] =  useState(initialTasks);
   const [taskToEdit, setTaskToEdit] = useState(null);

   const dqdHandleSubmit = (newTask) => {
    if (taskToEdit) {
      
      setDqdListTasks(prevTasks =>
        prevTasks.map(task => (task.dqd_taskId === newTask.dqd_taskId ? newTask : task))
      );
    } else {
      
      setDqdListTasks(prevTasks => [
        ...prevTasks,
        newTask
      ]);
    }
    setTaskToEdit(null);
  };

  const handleEditTask = (task) => {
    setTaskToEdit(task);
  };

  const handleRemoveTask = (taskId) => {
    setDqdListTasks(prevTasks =>
      prevTasks.filter(task => task.dqd_taskId !== taskId)
    );
  };

  return (
    <div className="container border">
      <h1> Đặng Quang Dũng - K22CNTT1</h1>
      <hr/>
      <div>
        {/* Danh sach list task */}
        <DqdListTask renderDqdListTask = {dqdlistTasks}  onDqdEdit={handleEditTask}  />
      </div>
      <div>
      <DqdTaskAdd dqdOnSubmit={dqdHandleSubmit} taskToEdit={taskToEdit} />
      </div>
    </div>
  );
}

export default App;
