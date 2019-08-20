import React, { PureComponent } from 'react';
import NoteForm from './NoteForm';
import { createNote } from '../services/notesApi';
//Ryan Code
export default class NoteContainer extends PureComponent {

  state = {
    title: '',
    body: ''
  }

  handleTitleChange = ({ target }) => {
    this.setState({ title: target.value });
  }

  handleBodyChange = ({ target }) => {
    this.setState({ body: target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    const { title, body } = this.state;
    createNote(title, body)
      .then(note => console.log(note));
  }

  render() {

    const { title, body } = this.state;

    return <NoteForm 
      title={title}
      handleTitleChange={this.handleTitleChange} 
      body={body}
      handleBodyChange={this.handleBodyChange}
      handleSubmit={this.handleSubmit}
    />;

  }

}

