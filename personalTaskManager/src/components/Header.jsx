import React from 'react'

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <h1>Task Manager</h1>

        <button className="settings-btn">
          ⚙ Settings
        </button>
      </div>
    </header> 
  )
}

export default Header