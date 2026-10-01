import React from 'react'
import { useState } from 'react' 

function TaskList() {

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

    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: "Complete React project",
            completed: true
        },

        {
            id: 2,
            text: "Learn useState",
            completed: true
        },

        {
            id: 3,
            text: "Build Task Manager",
            completed: true
        }
    ])

  return (
    <>
        {tasks.map((task) => {
            return (
                <div key={task.id}>
                    <input type='checkbox' checked={task.completed} onChange={() => toggleTask(task.id)}/>

                    <div>
                        {task.text}
                    </div>

                    <button onClick={() => deleteTask(task.id)}>Delete</button>
                </div>
            )
        })}
    </>
  )
}

export default TaskList