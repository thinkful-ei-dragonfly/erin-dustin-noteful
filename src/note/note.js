import React from 'react';
import UserContext from '../UserContext';
import { format } from 'date-fns';
// import { format } from 'upath';

export default class Note extends React.Component {
  static contextType = UserContext;

  render () {
  const noteId = this.props.match.params.noteId;
  const filteredNotes = this.context.notes.filter(note => note.id === noteId);
  const note = filteredNotes.map(note => {
    // const newDate = new Date(Date.parse(note.modified))
    // debugger;
    return (
    <div className='note' key={note.id}>
      <h3>{note.name}</h3>
      <p>Date modified on <span>{format(note.modified, 'Do MMM YYYY')}</span></p>
      <button onClick={() => {
        this.props.history.push('/')
        this.context.handleDelete(note.id)
        }} 
       type="delete">Delete Note</button>
      <p>{note.content}</p>
    </div>)
  })
  
  return <div>{note}</div>
  }
}