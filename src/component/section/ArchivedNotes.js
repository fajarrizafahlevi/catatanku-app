import React from 'react';
import NoteList from './NotesList';
import emptyMessage from '../../utils/emptyMessage';

// * TODO: Daftar catatan yang diarsip harus ditampilkan pada tempat terpisah dari catatan yang tidak diarsip
function NoteArchive({ notes, searchedTitle, searchedNotes, onDelete, onArchive }) {
    let archivedNotes = null;

    searchedTitle.length > 0
        ? archivedNotes = searchedNotes.filter((note) => note.archived === true)
        : archivedNotes = notes.filter((note) => note.archived === true);

    // TODO: Terdapat conditional rendering di mana bila tidak terdapat data catatan, maka UI menampilkan pesan “Tidak ada catatan” atau pesan apa pun yang mengindikasikan data catatan kosong
    return (
        <section className='archived-notes'>
            <h2><i className='fa fa-folder-o'></i> Arsip</h2>
            {
                archivedNotes.length > 0
                    ? <NoteList notes={archivedNotes} onDelete={onDelete} onArchive={onArchive} isArchived={true} />
                    : <p className='empty-message'>{emptyMessage()}</p>
            }
        </section>
    )
}

export default NoteArchive;