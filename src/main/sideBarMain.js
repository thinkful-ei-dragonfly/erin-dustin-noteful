import React from "react";
import {Link} from 'react-router-dom';

export default function SideBarMain(props) {
  const folderList = props.state.folders.map(folder => {
    return (
      <Link to ={`/folder/${folder.id}`} className="folder" key={folder.id}>
        <h4>{folder.name}</h4>
      </Link>
    );
  });
  return (
    <div>
      {folderList}
      <button className="addFolder">Add Folder</button>
    </div>
  );
}
