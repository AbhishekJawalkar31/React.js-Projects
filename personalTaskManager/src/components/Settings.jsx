import React from 'react'

function Settings({ setTasks }) {
  return (
    <>
        <div>Settings</div>

        <button onClick={() => setTasks([])}>Clear All Tasks</button>
    </>
  )
}

export default Settings