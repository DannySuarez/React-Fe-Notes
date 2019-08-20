import React from 'react';

import PropTypes from 'prop-types';
//Hooks
export default function Input({ title, 
  body, 
  handleChange, 
  handleSubmit }) {

  Input.propTypes = {
    title: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    body: PropTypes.string.isRequired,
    handleSubmit: PropTypes.func.isRequired
  };

  return (
    <form onSubmit={handleSubmit}>
      <span>Title:</span> <input type='text' name="title" value={title} onChange={handleChange}></input>
      <span>Body:</span> <textarea type=" text" name='body' value={body} onChange={handleChange}></textarea>
      <button>Create Note</button>
    </form>
  );
  
}
