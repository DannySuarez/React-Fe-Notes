import React from 'react';
import Note from './Note';
import PropTypes from 'prop-types';

function Notes({ notes }) {
  const noteList = notes.map(({ title, body }) => (
    <li key={Math.random()}>
      <Note title={title} body={body}/>
    </li>
  ));

  return (
    <ul>
      {noteList}
    </ul>
  );

}

Notes.propTypes = {
  notes: PropTypes.array.isRequired
};

export default Notes;
