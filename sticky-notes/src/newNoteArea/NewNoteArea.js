import React from 'react'
import NewNote from './newNote/NewNote'
import AddNoteButton from './addNoteButton/AddNoteButton'
import './newNoteArea.css'

function NewNoteArea({text, handleChange, handleAddNote}) {

  

  return (
    <div className="newNoteArea" >
        <NewNote text={text} handleChange={handleChange}/>
        <AddNoteButton handleAddNote={handleAddNote}/>
    </div>
  )
}

export default NewNoteArea