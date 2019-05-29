import React from 'react';

export default function Folder(props) {
  const folderId = props.match.match.params.folderId;
  // console.log(folderId);
  const filteredNotes = props.state.notes.filter(note => note.folderId === folderId);
  const notes = filteredNotes.map(note => {
    return (<div key={note.id}>
      <h3>{note.name}</h3>
      <p>{note.modified}</p>
      <button type="delete">Delete Note</button>
    </div>)
  })

  return <div>{notes}</div>
}