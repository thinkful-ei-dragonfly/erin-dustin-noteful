import React from "react";
import { Link } from 'react-router-dom';
import UserContext from '../UserContext';


export default class Main extends React.Component {
  static contextType = UserContext;

  render (){
  const noteList = this.context.notes.map((note) => {
    return (
      <div className='note' key={note.id}>
        <Link to={`/note/${note.id}`}>
          <h3>{note.name}</h3>
          <p>{note.modified}</p>
        </Link>
        <button onClick={() => {
        this.props.history.push('/')
        this.context.handleDelete(note.id)
        }}
        type="delete">Delete Note</button>
      </div>
    );
  });
  return <div className='noteList'>{noteList}
  <button className='addNote'>Add Note</button>
  </div>;
}
}
