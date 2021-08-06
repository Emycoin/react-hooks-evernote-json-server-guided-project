import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes, setCurrentNote, searchItem }) {
  function filterUl() {
    if (!searchItem || searchItem === "") {
      return <NoteItem key={notes.id} notes={notes} setCurrentNote={setCurrentNote} />;
    } else {
      /*
      if search item is not an empty string, then I want to only show notes in sidebar that include that string
      */
     if(searchItem != ""){
       let filteredNotes = notes
       filteredNotes = filteredNotes.filter((note) => note.title.toLowerCase().includes(searchItem.toLowerCase()))
       return <NoteItem key={notes.id} notes={filteredNotes} setCurrentNote={setCurrentNote}  />
     }
    }
  }

  return <ul>{filterUl()}</ul>;
}

export default NoteList;
