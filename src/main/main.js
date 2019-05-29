import React from "react";

export default function Main(props) {
  const noteList = props.state.notes.map((note) => {
    return (
      <div key={note.id}>
        <h3>{note.name}</h3>
        <p>{note.modified}</p>
        <button type="delete">Delete Note</button>
      </div>
    );
  });
  return <div className='noteList'>{noteList}
  <button className='addNote'>Add Note</button>
  </div>;
}
