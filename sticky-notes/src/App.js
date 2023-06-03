// import logo from './logo.svg';
import './App.css';
import StickyNote from './stickyNote/StickyNote';

function App() {
  return (
    <div className="App">
      <h1>My Sticky Notes</h1>
      <div className="notesArea">
      <StickyNote color="#FBFF2B"></StickyNote>;
      <StickyNote color="#1EF1FF"></StickyNote>;
    </div>


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
