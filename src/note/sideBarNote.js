import React from 'react';
import UserContext from '../UserContext';

export default class SideBarNote extends React.Component {
static contextType = UserContext;

render(){
  const noteId = this.props.match.params.noteId;
  const note = this.context.notes.filter(note => note.id === noteId);
  const folderName = this.context.folders.filter(folder => folder.id === note[0].folderId);
  return (
    <div className='folder'>
      <button>Go Back</button>
      <h3>{folderName[0].name}</h3>
    </div>
  )
}
}