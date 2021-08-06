import React, { useState } from "react";
import Search from "./Search";
import Sidebar from "./Sidebar";
import Content from "./Content";

//function clickFunc(event) {

//}
function NoteContainer({notes, setNotes})
 { 
  const [currentNote, setCurrentNote] = useState({})
  const [editIsClicked, setEditIsClicked] = useState(false);
  const [searchItem, setSearchItem] = useState("")
  const [sortAlpha, setSortAlpha] = useState(false)

  return (
    <div>
      <Search setSortAlpha={setSortAlpha} notes={notes} setNotes={setNotes} searchItem={searchItem} setSearchItem={setSearchItem} />
      <div className="container">
        <Sidebar notes={notes} setCurrentNote={setCurrentNote} setNotes={setNotes} searchItem={searchItem}/>
        <Content note={currentNote} setNote={setCurrentNote} notes={notes} setNotes={setNotes} editIsClicked={editIsClicked} setEditIsClicked={setEditIsClicked}  />
      </div>
    </div>
  );
}

export default NoteContainer;
