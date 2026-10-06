import { useState } from 'react'

// TaskForm() - Adds new task

function TaskForm({setTasks}) {

  const [inputValue, setInputValue] = useState("")

  function handleSubmit(event) {
    event.preventDefault()

    const newTask = {
      id: Date.now(),
      text: inputValue,
      completed: false
    }

    setTasks((previousTasks) => {
      setInputValue("")
      return [...previousTasks, newTask]
    })
  }

  return (
    <form className="task-form" onSubmit={(event) => handleSubmit(event)}>
        <input className="task-input" type="text" placeholder='Enter a new task...' value={inputValue} onChange={(event) => {
          setInputValue(event.target.value)
        }}/>

        <button className="add-btn">
          Add Task
        </button>
    </form>
  )
}

export default TaskForm