import React, { useState } from "react";
import NoteViewer from "./NoteViewer";

function NoteItem({ notes, setCurrentNote }) {
  return notes.map((item) => (
    <li
      onClick={(event) => {
        setCurrentNote(item);
      }}
    >
      <h2>{item.title}</h2>
      <p style={{'text-overflow': 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap'}}>{item.body}</p>
    </li>
  ));
}

export default NoteItem;
