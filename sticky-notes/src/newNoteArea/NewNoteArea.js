import React from 'react'
import NewNote from './newNote/NewNote'
import AddNoteButton from './addNoteButton/AddNoteButton'
import './newNoteArea.css'

function NewNoteArea() {
  return (
    <div className="newNoteArea">
        <NewNote/>
        <AddNoteButton/>
    </div>
  )
}

export default NewNoteArea