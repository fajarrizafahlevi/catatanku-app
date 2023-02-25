import React from 'react';
import PropTypes from 'prop-types';
import NoteItemContent from './item/NoteItemContent';
import NoteItemAction from './item/NoteItemAction';

function NoteDetail({
  id,
  title,
  createdAt,
  body,
  onDelete,
  onArchive,
  isArchived,
}) {
  return (
    <section className="note-item">
      <h3 className="note-item__title">{title}</h3>
      <NoteItemContent title={title} createdAt={createdAt} body={body} />
      <NoteItemAction
        id={id}
        onDelete={onDelete}
        onArchive={onArchive}
        isArchived={isArchived}
      />
    </section>
  );
}

NoteDetail.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
  isArchived: PropTypes.bool.isRequired,
};

export default NoteDetail;
