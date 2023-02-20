import React from 'react';
import NoteInput from './form/NoteInput';
import ActiveNotes from './section/ActiveNotes';
import ArchivedNotes from './section/ArchivedNotes';

function AppBody({ addNote, notes, searchedTitle, searchedNotes, onDelete, onArchive }) {
    return (
        <main className='note-app__body'>
            {searchedTitle.length > 0
                ? null
                : <NoteInput addNote={addNote} />
            }
            <ActiveNotes
                notes={notes}
                searchedTitle={searchedTitle}
                searchedNotes={searchedNotes}
                onDelete={onDelete}
                onArchive={onArchive}
            />
            <ArchivedNotes
                notes={notes}
                searchedTitle={searchedTitle}
                searchedNotes={searchedNotes}
                onDelete={onDelete}
                onArchive={onArchive}
            />
        </main>
    )
}

export default AppBody;
