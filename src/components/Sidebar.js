import React, {useState} from "react";
import NoteList from "./NoteList";

function Sidebar({notes, setNotes, setCurrentNote, searchItem}) {
  //create new note and add to notes, set as current note

  function makeNewNote(){
    let newID = notes.length + 1
    const newNote = {title: "default", id: newID,  body: "placeholder"}
    setNotes([...notes, newNote])
  }


  return (
    <div className="master-detail-element sidebar">
      <NoteList notes={notes} setCurrentNote={setCurrentNote} searchItem={searchItem}/>
      <button onClick={makeNewNote}>New</button>
    </div>
  );
}

export default Sidebar;
