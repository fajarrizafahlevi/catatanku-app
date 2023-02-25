import React from 'react';
import PropTypes from 'prop-types';
import { FiFolderPlus, FiFolderMinus } from 'react-icons/fi';

function ArchiveButton({ id, isArchived, onArchive }) {
  return (
    <button
      className="archive-button"
      onClick={() => {
        onArchive(id);
      }}
    >
      {isArchived === false ? <FiFolderPlus /> : <FiFolderMinus />}
    </button>
  );
}

ArchiveButton.propTypes = {
  id: PropTypes.string.isRequired,
  isArchived: PropTypes.bool.isRequired,
  onArchive: PropTypes.func.isRequired,
};

export default ArchiveButton;
