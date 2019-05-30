import React from "react";
import {Link} from 'react-router-dom';
import UserContext from '../UserContext';

export default class SideBarMain extends React.Component {
  static contextType = UserContext;

  render() {
  
  const folderList = this.context.folders.map(folder => {
    return (
      <div className='folder' key={folder.id}>
        <Link to ={`/folder/${folder.id}`}>
          <h4>{folder.name}</h4>
        </Link>
      </div>
    );
  });
  return (
    <div>
      {folderList}
      <button className="addFolder">Add Folder</button>
    </div>
  );
}
}
