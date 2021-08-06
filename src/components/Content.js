import React, {useState} from "react";
import NoteEditor from "./NoteEditor";
import NoteViewer from "./NoteViewer";
import Instructions from "./Instructions";

/*
  Advice: If you cannot figure out how to get this component to work,
          move the div and getContent up into NoteContainer and
          try to get it to work in the parent first.
          Then complete the rest of your app before attempting to
          refactor to get this Content component to work.
*/

function Content({note, notes, setNotes, setNote, editIsClicked, setEditIsClicked}) {
  
  const getContent = (note, editIsClicked, setEditIsClicked, notes, setNotes) => {
    if (editIsClicked) {
      return <NoteEditor note={note} notes={notes} setNotes={setNotes} setNote={setNote} editIsClicked={editIsClicked} setEditIsClicked={setEditIsClicked}/>;
    } else if (note.id) {
      return <NoteViewer note={note} setEditIsClicked={setEditIsClicked} />;
    } else {
      return <Instructions note={note} />;
    }
  };
  
  return <div className="master-detail-element detail">{getContent(note, editIsClicked, setEditIsClicked, notes, setNotes)}</div>;
}

export default Content;
