import React, { useState } from "react";

import Footer from "./Footer";
import NoteTemp from "./NoteTemp";
import CreateArea from "./CreateArea";


function Note() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <NoteTemp
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default Note;
