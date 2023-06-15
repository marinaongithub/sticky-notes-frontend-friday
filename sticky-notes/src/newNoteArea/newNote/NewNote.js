import React from 'react'
import './newNote.css'

function NewNote({text, handleChange}) {

  

  return (
    <div>
      <textarea name="note" value={text} onChange={handleChange}></textarea> 
    </div>
  )
}

export default NewNote