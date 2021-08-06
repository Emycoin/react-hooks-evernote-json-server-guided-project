import React, { useState } from "react";

function NoteEditor({ note, setNote, setNotes, notes, setEditIsClicked }) {
  const [saved, setSaved] = useState(false);
  const [canceled, setCanceled] = useState(false);
  const [bodyInput, setBody] = useState("");
  const [titleInput, setTitle] = useState("");

  function handleChangeBody(e) {
    let value = e.target.value;
    setBody(value);
  }

  function handleChangeTitle(e) {
    let value = e.target.value;
    setTitle(value);
  }
  function handleCancel(e) {
    setEditIsClicked(false);
  }

  function handleSave(e) {
    e.preventDefault();
    let newNote = { title: titleInput, body: bodyInput, id: note.id };
   const notesCopy = notes.map((item) => {
      if (item.id === note.id) {
        return newNote;
      } else {
        return { ...item };
      }
    });
     setNotes(notesCopy)
     setNote(newNote)
    //  1. copy notes array
    // 2. find the item by its id in the copy, and update it to the new text they typed in
    // 3. update state with copy of notes array

    //for each item in the map check to see if it has the right id, then set the note.body and note.title to title and body. then set notes to newNotes, note to note, and editisclicked to false

    //const
    //copy Array, find by element by id, update title and body, setnotes(copy)

    // newNotes.filter

    //[...notes, newNote])
    setEditIsClicked(false);
  }
  //if save is clicked set note.id = e.target.value of id/ note.body to //set current note
  //if cancel is clicked set setEditisClicked to false

  return (
    <form className="note-editor">
      <input type="text" onChange={handleChangeTitle} name="title" defaultValue={note.title} />
      <textarea name="body" onChange={handleChangeBody} defaultValue={note.body} />
      <div className="button-row">
        <input onClick={handleSave} className="button" type="submit" value="Save" />
        <button onClick={handleCancel} type="button">
          Cancel
        </button>
      </div>
    </form>
  );
}

export default NoteEditor;
