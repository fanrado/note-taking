import React from 'react';
import Pad from './components/pad';
import Form from './components/Form';
import './App.css';

class App extends React.Component {
  state = {
    newNote: false, // hide or show the form to add new note
    data: [
      {
        title: "Note 1",
        content: "Note on web development"
      },
      {
        title: "Note 2",
        content: "Note on digital marketing"
      }
    ]
  }

  handleDelete = (note) => {
    const tmpData = this.state.data.filter(theNote => theNote.title !== note.title);
    this.setState({ data: tmpData });
  };

  addNote = (note) => {
    const { data } = this.state;
    for (let i = 0; i < data.length; i++) {
      if (data[i].title === note.title) return;
    }
    this.setState({ data: [...data, note] });
  };

  onNewNote = () => {
    this.setState({ newNote: true });
  };

  handleHide = () => {
    this.setState({ newNote: false });
  };

  render() {
    return (
      <div className="note-window">
        <button onClick={this.onNewNote} className="addNewNote">New note</button>
        {this.state.newNote ? <Form onAdd={this.addNote} onHide={this.handleHide} /> : null}
        {this.state.data.map(note => <Pad key={note.title} onDelete={this.handleDelete} data={note} />)}
      </div >
    );
  }
}
export default App;
