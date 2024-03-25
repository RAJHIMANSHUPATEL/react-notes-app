import React, { useEffect, useState } from 'react'
import NotesList from './components/NotesList'
import { nanoid } from 'nanoid';
import Search from './components/Search';
import Header from './components/Header';

function App() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      text: "Hello",
      date: "sdkjhgskjf"
    }
  ]); // Set initial state to null
  const [searchText, setSearchText] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'))

    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  //Saving the data in localStorage
  useEffect(() => {
    if (notes !== null) { // Check if notes is not null
      localStorage.setItem('react-notes-app-data', JSON.stringify(notes))
    }
  }, [notes])

  const addnote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    }

    const newNotes = [...(notes || []), newNote]; // Handle null notes state
    setNotes(newNotes)
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  }

  return (
    <div className={darkMode && "dark-mode"}>
      <div className="container">
        <Header handleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        {notes !== null && ( // Render NotesList only when notes are available
          <NotesList
            notes={notes.filter((note) => note.text.toLowerCase().includes(searchText))}
            handleAddNote={addnote}
            handleDeleteNote={deleteNote}
          />
        )}
      </div>
    </div>
  )
}

export default App
