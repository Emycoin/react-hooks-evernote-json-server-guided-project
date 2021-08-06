import React from "react";

function Search({ notes, setNotes, setSortAlpha, searchItem, setSearchItem }) {
  function handleChange(e) {
    let value = e.target.value;
    setSearchItem(value);
  }

  function handleClick() {
    console.log("did it work?");
    //sort array alphabeticallly
    //objArray.sort((a, b) => a.DepartmentName.toLowerCase().localeCompare(b.DepartmentName.toLowerCase()))

    //make a copy of notes
    //sort alphbetically the copy
    //setNotes(copy)
    const notesCopy = notes.map((item) => {
      return { ...item };
    });
    const sortedNotes = notesCopy.sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase()));
    setNotes(sortedNotes);
  }

  return (
    <div className="filter">
      <input onChange={handleChange} value={searchItem} id="search-bar" type="text" placeholder="Search Notes" />
      <button onClick={handleClick}>Sort Alphabetically</button>
    </div>
  );
}

export default Search;
