import React from 'react';
import UserContext from '../UserContext';

export default class Note extends React.Component {
  static contextType = UserContext;

  render () {
  const noteId = this.props.match.params.noteId;
  const filteredNotes = this.context.notes.filter(note => note.id === noteId);
  const note = filteredNotes.map(note => {
    return (<div className='note' key={note.id}>
      <h3>{note.name}</h3>
      <p>{note.modified}</p>
      <button type="delete">Delete Note</button>
      <p>{note.content}</p>
    </div>)
  })
  
  return <div>{note}</div>
  }
}