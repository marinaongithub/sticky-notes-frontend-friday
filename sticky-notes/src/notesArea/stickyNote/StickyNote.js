import React from 'react'
import "./stickyNote.css";

function StickyNote({text, color} ) {
  return (
    <div className="stickyNote" style={{backgroundColor: color}}>
      <p className="text">{text}</p>

    </div>
  )
}

export default StickyNote