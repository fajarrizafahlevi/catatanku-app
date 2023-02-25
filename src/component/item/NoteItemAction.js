import React from 'react';
import PropTypes from 'prop-types';
import ArchiveButton from '../button/ArchiveButton';
import DeleteButton from '../button/DeleteButton';

function NoteItemAction({ id, isArchived, onArchive, deleteNote }) {
  return (
    <div className="note-item__action">
      <ArchiveButton id={id} isArchived={isArchived} onArchive={onArchive} />
      <DeleteButton id={id} deleteNote={deleteNote} />
    </div>
  );
}

NoteItemAction.propTypes = {
  id: PropTypes.string.isRequired,
  deleteNote: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
  isArchived: PropTypes.bool.isRequired,
};

export default NoteItemAction;
