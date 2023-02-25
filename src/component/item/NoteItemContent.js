import React from 'react';
import showFormattedDate from '../../utils/showFormattedDate';
import parser from 'html-react-parser';
import PropTypes from 'prop-types';

function NoteItemContent({ createdAt, body }) {
  return (
    <article className="note-item__content">
      <p className="note-item__date">{showFormattedDate(createdAt)}</p>
      <p className="note-item__body">{parser(body)}</p>
    </article>
  );
}

NoteItemContent.propTypes = {
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default NoteItemContent;
