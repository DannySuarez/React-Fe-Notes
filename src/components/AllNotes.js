import React, { PureComponent } from 'react';
import Notes from './Notes';
import InputContainer from './InputContainer';
import { getNote } from '../services/notesApi';

export default class AllNotes extends PureComponent {

  state = {
    notes: []
  }

  addNote= note => {
    this.setState(state => ({
      notes: [...state.notes, note]
    }));
  }

  componentDidMount() {
    getNote()
      .then(notes => {
        this.setState({ notes });
      });
  }

  render() {
    const { notes } = this.state;
    
    return (
    <>
      <InputContainer addNote={this.addNote} />
      <Notes notes={notes} />
    </>

    );
  }

}
