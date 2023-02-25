import React from 'react';
import PropTypes from 'prop-types';
import showFormattedDate from '../../utils/showFormattedDate';

function NoteItemContent({ createdAt, body }) {
  return (
    <article className="note-item__content">
      <p className="note-item__date">{showFormattedDate(createdAt)}</p>
      <p className="note-item__body">{body}</p>
    </article>
  );
}

NoteItemContent.propTypes = {
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default NoteItemContent;
