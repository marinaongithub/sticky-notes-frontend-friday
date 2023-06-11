import React from 'react'
import './addNoteButton.css'

function AddNoteButton(props) {
  return (
    <div>
      <button className="addNote" onClick={props.handleAddNote}>Add Sticky Note</button>
    </div>
  )
}

export default AddNoteButton