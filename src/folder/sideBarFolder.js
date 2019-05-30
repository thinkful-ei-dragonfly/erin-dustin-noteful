import React from "react";
import {NavLink} from 'react-router-dom';
import UserContext from '../UserContext';

export default class SideBarMain extends React.Component {
  static contextType = UserContext;
  
  render () {
  const folderList = this.context.folders.map(folder => {
    return (
      <div className='folder'>
        <NavLink to ={`/folder/${folder.id}`} key={folder.id} id={folder.id}>
          <h4>{folder.name}</h4>
        </NavLink>
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