// import logo from './logo.svg';
import './App.css';
import NewNoteArea from './newNoteArea/NewNoteArea';
import NotesArea from './notesArea/NotesArea';

function App() {
  return (
    <div className="App">
      <h1>My Sticky Notes</h1>
      <NotesArea/>
      <NewNoteArea/>


      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
