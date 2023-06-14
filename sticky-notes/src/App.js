// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import NewNoteArea from './newNoteArea/NewNoteArea';
import NotesArea from './notesArea/NotesArea';
import StickyNote from './notesArea/stickyNote/StickyNote';

function App() {

  const [newNote, setNewNote] = useState()

  const colors = ["#FBFF2B", "#1EF1FF", "#FFB800", "#0500FF"];

  const [stickyNotes, setStickyNotes] = useState([<StickyNote color={colors[0]}>
    </StickyNote>,<StickyNote color={colors[1]}></StickyNote>, <StickyNote color={colors[2]}></StickyNote>,
    <StickyNote color={colors[3]}></StickyNote>])

  const [text, setText] = useState("Join next Meet & greet!")


  const handlePlusClick = () => {
    setNewNote(<NewNoteArea text={text} handleChange={handleChange} handleAddNote={handleAddNote}/>)
    console.log("newNote")
  }

  const handleAddNote = () => {
    setNewNote()
    stickyNotes.push(<StickyNote color={colors[Math.floor(Math.random() * 4)]} text={text}></StickyNote>)
    setStickyNotes(stickyNotes)
    console.log("New sticky note added")
    
  }

  const handleChange = (event) => {
    setText(event.target.value);
  };


  return (
    <div className="App">
      <h1>My Sticky Notes</h1>
      <NotesArea handlePlusClick={handlePlusClick} stickyNotes={stickyNotes} />
      {newNote}

    </div>
  );
}

export default App;
