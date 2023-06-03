import React from 'react'
import "./stickyNote.css";

function StickyNote(props) {
  return (
    <div className="notes" style={{backgroundColor:props.color}}>
    </div>
  )
}

export default StickyNote