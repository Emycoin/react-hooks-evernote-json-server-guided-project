import React from "react";

function NoteViewer({note, setEditIsClicked}) {

  return (
    <>
      <h2>{note.title}</h2>
      <p>{note.body}</p>
      <button onClick={()=>{setEditIsClicked(true)}}>Edit</button>
    </>
  );
}

export default NoteViewer;
