import React from 'react'
import StickyNote from './stickyNote/StickyNote'
import PlusButton from './plusButton/PlusButton'
import { useState } from 'react'
import "./notesArea.css"

function NotesArea({stickyNotes, handlePlusClick}) {


  return (
    <div className="notesArea">
        <div className="notes">
          {stickyNotes}
        </div>
        <PlusButton handlePlusClick={handlePlusClick}/>
    </div>
  )
}

export default NotesArea