import React from "react";
import { Link } from "react-router-dom";
import UserContext from "../UserContext";

export default class Folder extends React.Component {
  static contextType = UserContext;


  render() {
    const folderId = this.props.match.params.folderId;
    const filteredNotes = this.context.notes.filter(
      note => note.folderId === folderId
    );
    const notes = filteredNotes.map(note => {
      return (
        <div className="note">
          <Link to={`/note/${note.id}`} key={note.id}>
            <h3>{note.name}</h3>
            <p>{note.modified}</p>
            <button type="delete">Delete Note</button>
          </Link>
        </div>
      );
    });
    return <div>{notes}</div>;
  }
}
