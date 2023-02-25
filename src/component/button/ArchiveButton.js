import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiFolderPlus, FiFolderMinus } from 'react-icons/fi';
import PropTypes from 'prop-types';

function ArchiveButton({ id, onArchive, isArchived }) {
  const navigate = useNavigate();

  function onArchiveHandler(id) {
    onArchive(id);
    navigate('/');
  }

  return (
    <button
      className="archive-button"
      onClick={() => {
        onArchiveHandler(id);
      }}
    >
      {isArchived === false ? (
        <FiFolderPlus title="Arsipkan" />
      ) : (
        <FiFolderMinus title="Pindahkan" />
      )}
    </button>
  );
}

ArchiveButton.propTypes = {
  id: PropTypes.string.isRequired,
  onArchive: PropTypes.func.isRequired,
  isArchived: PropTypes.bool.isRequired,
};

export default ArchiveButton;
