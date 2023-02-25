import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiTrash2 } from 'react-icons/fi';
import PropTypes from 'prop-types';

function DeleteButton({ id, onDelete }) {
  const navigate = useNavigate();

  function onDeleteHandler(id) {
    onDelete(id);
    navigate('/');
  }

  return (
    <button
      className="delete-button"
      title="Hapus"
      onClick={() => {
        onDeleteHandler(id);
      }}
    >
      <FiTrash2 />
    </button>
  );
}

DeleteButton.propTypes = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default DeleteButton;
