import React from 'react';
import NoteList from './NotesList';
import emptyMessage from '../../utils/emptyMessage';

function ActiveNotes({ notes, searchedTitle, searchedNotes, onDelete, onArchive }) {
    let activeNotes = null;

    searchedTitle.length > 0
        ? activeNotes = searchedNotes.filter((note) => note.archived === false)
        : activeNotes = notes.filter((note) => note.archived === false);

    // TODO: Terdapat conditional rendering di mana bila tidak terdapat data catatan, maka UI menampilkan pesan “Tidak ada catatan” atau pesan apa pun yang mengindikasikan data catatan kosong
    return (
        <section className='active-notes'>
            <h2><i className='fa fa-sticky-note-o'></i> Catatan Aktif</h2>
            {
                activeNotes.length > 0
                    ? <NoteList notes={activeNotes} onDelete={onDelete} onArchive={onArchive} isArchived={false} />
                    : <p className='empty-message'>{emptyMessage()}</p>
            }
        </section>
    )
}

export default ActiveNotes;