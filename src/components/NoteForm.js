import React from 'react';
import PropTypes from 'prop-types';
//Ryan code
function NoteForm({
  title,
  handleTitleChange,
  body,
  handleBodyChange,
  handleSubmit
}) {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={handleTitleChange} />
      <textarea
        type="text"
        placeholder="Body"
        value={body}
        onChange={handleBodyChange} />
      <button>Submit</button>
    </form>
  );
}

NoteForm.propTypes = {
  title: PropTypes.string.isRequired,
  handleTitleChange: PropTypes.func.isRequired,
  body: PropTypes.string.isRequired,
  handleBodyChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default NoteForm;
