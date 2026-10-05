import './App.css'
import Header from './components/Header'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import Settings from './components/Settings'
import { useEffect, useState } from 'react'

function App() {

    const [tasks, setTasks] = useState(() => {
      const savedTasks = localStorage.getItem('tasks')

      return savedTasks ? JSON.parse(savedTasks) : []
    })

    useEffect(() => {
      localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])

    const [filter, setFilter] = useState("all")
    const [search, setSearch] = useState("")

    let filteredTasks = tasks

    if(filter === "active") {
      filteredTasks = tasks.filter((task) => !task.completed)
    }

    if(filter === "completed") {
      filteredTasks = tasks.filter((task) => task.completed)
    }

    filteredTasks = filteredTasks.filter((task) => task.text.toLowerCase().includes(search.toLowerCase()))

  return (
    <>
      <Header />
      <TaskForm setTasks={setTasks}/>

      <div>
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("active")}>Active</button>
        <button onClick={() => setFilter("completed")}>Completed</button>

        <input type='text' placeholder='Search tasks' value={search} onChange={(event) => setSearch(event.target.value)}></input>
      </div>

      <Settings setTasks={setTasks}/>

      <TaskList tasks={filteredTasks} setTasks={setTasks}/>

      <p>Task count: {tasks.length}</p>
    </>
  )
}

export default App
