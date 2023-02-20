import React from 'react';
import ArchiveButton from '../button/ArchiveButton';
import DeleteButton from '../button/DeleteButton';

function NoteItemAction({ notes, id, onDelete, onArchive, isArchived }) {
    return (
        <div className='note-item__action'>
            <DeleteButton id={id} onDelete={onDelete} />
            <ArchiveButton notes={notes} id={id} onArchive={onArchive} isArchived={isArchived} />
        </div>
    );
}

export default NoteItemAction;