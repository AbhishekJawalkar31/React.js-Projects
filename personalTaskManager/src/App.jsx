import './App.css'
import Header from './components/Header'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import { useState } from 'react'

function App() {

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

    const [filter, setFilter] = useState("all")

    let filteredTasks = tasks

    if(filter === "active") {
      filteredTasks = tasks.filter((task) => !task.completed)
    }

    if(filter === "completed") {
      filteredTasks = tasks.filter((task) => task.completed)
    }

  return (
    <>
      <Header />
      <TaskForm setTasks={setTasks}/>

      <div>
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("active")}>Active</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
      </div>

      <TaskList tasks={filteredTasks} setTasks={setTasks}/>
    </>
  )
}

export default App
