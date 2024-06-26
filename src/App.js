import React, { useEffect, useState } from 'react';
import NotesList from './components/NotesList';
import { nanoid } from 'nanoid';
import Search from './components/Search';
import Header from './components/Header';
import AddNote from './components/AddNote';

function App() {
  const [notes, setNotes] = useState(null);
  const [searchText, setSearchText] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'));

    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    if (notes !== null) {
      localStorage.setItem('react-notes-app-data', JSON.stringify(notes));
    } else {
      localStorage.removeItem('react-notes-app-data');
    }
  }, [notes]);

  const addnote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };

    const newNotes = [...(notes || []), newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <div className="container">
        <Header handleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        <AddNote handleAddNote={addnote} />
        {notes !== null && (
          <NotesList
            notes={notes.filter((note) => note.text.toLowerCase().includes(searchText))}
            handleDeleteNote={deleteNote}
          />
        )}
      </div>
    </div>
  );
}

export default App;
