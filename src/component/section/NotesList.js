import React from 'react';
import NoteItem from '../item/NoteItem';

function NoteList({ notes, onDelete, onArchive, isArchived }) {
    return (
        <div className='active-notes__list'>
            {
                // TODO: Menggunakan teknik array map untuk menampilkan daftar catatan
                notes.map((note) => (
                    <NoteItem
                        key={note.id}
                        id={note.id}
                        onDelete={onDelete}
                        onArchive={onArchive}
                        isArchived={isArchived}
                        {...note}
                    />
                ))
            }
        </div >
    );
}

export default NoteList;