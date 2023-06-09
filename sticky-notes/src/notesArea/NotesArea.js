import React from 'react'
import StickyNote from './stickyNote/StickyNote'
import PlusButton from './plusButton/PlusButton'
import "./notesArea.css"

function NotesArea() {
  return (
    <div className="notesArea">
        <div className="notes">
            <StickyNote color="#FBFF2B"></StickyNote>
            <StickyNote color="#1EF1FF"></StickyNote>
            {/* <StickyNote color="#1EF1FF"></StickyNote> */}
        </div>
        <PlusButton/>
    </div>
  )
}

export default NotesArea