function Settings({ setTasks }) {
  return (
    <div className="settings">
      <h2>Settings</h2>

      <button
        className="clear-btn"
        onClick={() => setTasks([])}
      >
        Clear All Tasks
      </button>
    </div>
  )
}

export default Settings