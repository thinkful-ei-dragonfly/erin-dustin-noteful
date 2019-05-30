import React from "react";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import "./App.css";
import Main from "./main/main";
import SideBarMain from "./main/sideBarMain";
import Note from "./note/note";
import SideBarNote from "./note/sideBarNote";
import Folder from "./folder/folder";
import SideBarFolder from "./folder/sideBarFolder";
import UserContext from "./UserContext";

class App extends React.Component {
  state = {
    folders: [],
    notes: []
  };

  handleDelete = (noteId) => {
    const notesUrl = `http://localhost:9090/notes/${noteId}`;
    const filteredNotes = this.state.notes.filter(note => note.id !== noteId)
    
    // this.setState({
    //   notes: filteredNotes,
    // })

    fetch(notesUrl, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      },
    })
      .then(res => {
      if (!res.ok) {
        throw new Error(res.status)
      }
      return res.json()
    })
    .then(() => 
      this.setState({
        notes: filteredNotes,
      }))
    .catch(error => this.setState({ error }))
  }

  

  componentDidMount() {
    const foldersUrl = 'http://localhost:9090/folders';
    const notesUrl ='http://localhost:9090/notes';

    fetch(foldersUrl)
      .then(res => {
        if (!res.ok) {
          throw new Error(res.status)
        }
        return res.json()
      })
      .then(res => this.setState({
        folders: res,
      }))
      .catch(error => this.setState({ error }));
      
      fetch(notesUrl)
      .then(res => {
        if (!res.ok) {
          throw new Error(res.status)
        }
        return res.json()
      })
      .then(res => this.setState({
        notes: res,
      }))
      .catch(error => this.setState({ error}))
  }

  render() {
    const contextValue = {
      folders: this.state.folders,
      notes: this.state.notes,
      handleDelete: this.handleDelete
    };
    return (
      <UserContext.Provider value={contextValue}>
        <div className="App">
          <header>
            <Link to={`/`}>Noteful</Link>
          </header>
          <div className="flexBox">
            <div className="sideBar">
              <Route
                exact
                path="/"
                component={SideBarMain}
              />
              <Route
                path="/folder/:folderId"
                component={SideBarFolder}
              />
              <Route
                path="/note/:noteId"
                  component={SideBarNote}
              />
            </div>
            <main>
              <Route
                exact
                path="/"
                component={Main}
              />
              <Route
                path="/folder/:folderId"
                component={Folder}
              />
              <Route
                path="/note/:noteId"
                component={Note}
              />
            </main>
          </div>
        </div>
      </UserContext.Provider>
    );
  }
}

export default App;
