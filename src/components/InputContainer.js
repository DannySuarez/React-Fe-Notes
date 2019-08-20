import React, { useState } from 'react';
import Input from './Input';
import { createNote } from '../services/notesApi';
//Hooks
export default function InputContainer({ addNote }) {
  const [initialState, newState] = useState({
    title: '',
    body: '',
  });

  const handleChange = ({ target }) => {
    newState({ ...initialState, [target.name]: target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { title, body } = initialState;
    createNote(title, body)
      .then(note => addNote && addNote(note));
    newState({ title: '', body: '' });
  };

  return (
    <Input 
      title={initialState.title}
      body={initialState.body}
      handleChange={handleChange}
      handleSubmit={handleSubmit}/>
  );

}
