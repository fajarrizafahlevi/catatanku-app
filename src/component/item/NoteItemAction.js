import React from 'react';
import PropTypes from 'prop-types';
import ArchiveButton from '../button/ArchiveButton';
import DeleteButton from '../button/DeleteButton';

function NoteItemAction({ id, onDelete, onArchive, isArchived }) {
  return (
    <div className="note-item__action">
      <ArchiveButton id={id} onArchive={onArchive} isArchived={isArchived} />
      <DeleteButton id={id} onDelete={onDelete} />
    </div>
  );
}

NoteItemAction.propTypes = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
  isArchived: PropTypes.bool.isRequired,
};

export default NoteItemAction;
