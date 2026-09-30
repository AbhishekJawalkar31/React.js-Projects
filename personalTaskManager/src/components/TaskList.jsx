import React from 'react'

function TaskList() {

    const taskList = [
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
    ]

  return (
    <>
        {taskList.map((task) => {
            return (
                <>
                    <input type='checkbox' checked={task.completed}/>

                    <div key={task.id}>
                        {task.text}
                    </div>

                    <button>Delete</button>
                </>
            )
        })}
    </>
  )
}

export default TaskList