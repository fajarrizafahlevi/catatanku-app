import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import NoteItemContent from './NoteItemContent';

function NoteItem({ id, title, createdAt, body }) {
  return (
    <div className="note-item">
      <h3 className="note-item__title">
        <Link to={`/notes/${id}`}>{title}</Link>
      </h3>
      <NoteItemContent title={title} createdAt={createdAt} body={body} />
    </div>
  );
}

NoteItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default NoteItem;
