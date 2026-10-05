import React from 'react'
import { useState } from 'react' 

function TaskList({tasks, setTasks}) {

    // toggleTask() - toggle checkbox

    function toggleTask(id) {
        const updatedTasks = tasks.map((task) => {
            if(task.id === id) {
                return {
                    ...task,
                    completed: !task.completed
                }
            }

            return task
        })

        setTasks(updatedTasks)
    }

    // deleteTask() - delete task
    
    function deleteTask(id) {
        const updatedTasks = tasks.filter((task) => {
            return task.id !== id
        })

        setTasks(updatedTasks)
    }

  return (
    <>
        {tasks.length === 0 ? (
            <p>No tasks found.</p>
        ) : (
            tasks.map((task) => (
                <div key={task.id}>
                    <input type='checkbox' checked={task.completed} onChange={() => toggleTask(task.id)}/>

                    <div>
                        {task.text}
                    </div>

                    <button onClick={() => deleteTask(task.id)}>Delete</button>
                </div>
            ))
        )}
    </>
  )
}

export default TaskList