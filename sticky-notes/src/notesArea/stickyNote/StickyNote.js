import React from 'react'
import "./stickyNote.css";

function StickyNote(props) {
  return (
    <div className="stickyNote" style={{backgroundColor:props.color}}>
    </div>
  )
}

export default StickyNote