import React from 'react';

export default function DqdListTask({ renderDqdListTasks, onDqdEdit,  }) {
    console.log(renderDqdListTasks);

    const dqdHandleEdit = (param) => {
        console.log("Edit:", param);
        onDqdEdit(param);
    };

    

    if (!renderDqdListTasks) {
        return <div>No tasks available</div>;
    }

    let dqdElementTask = renderDqdListTasks.map((task, index) => {
        return (
            <tr key={index}>
                <td>{index + 1}</td>
                <td>{task.dqd_taskId}</td>
                <td>{task.dqd_taskName}</td> 
                <td>{task.dqd_level}</td>
                <td>
                    <button className='btn btn-success' onClick={() => dqdHandleEdit(task)}>Edit</button>
                    <button className='btn btn-danger' onClick={() => (task.dqd_taskId)}>Remove</button>
                </td>
            </tr>
        );
    });

    return (
        <div>
            <h2>Danh sách các nhiệm vụ</h2>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Task ID</th>
                        <th>Task Name</th>
                        <th>Task Level</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {dqdElementTask}
                </tbody>
            </table>
        </div>
    );
}