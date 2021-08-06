import React, {useState, useEffect} from "react";
import Header from "./Header";
import NoteContainer from "./NoteContainer";

function App() {

  const [notes, setNotes] = useState([])

 // function renderAfterClick(){
//    console.log('hi')
 // }

  //function handleClick(){
 //   setClicked(!clicked)
   // console.log(clicked) 
  //if true, render to content
 // }
  //function handleChange(){
    ///if search item is not an empty string .includes
 // }

  useEffect(() => {
    const url = "http://localhost:3000/notes";
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => { 
        setNotes(data)
      });
  }, []);

  return (
    <div className="app">
      <Header />
      <NoteContainer notes={notes} setNotes={setNotes} />
    </div>
  );
}

export default App;
