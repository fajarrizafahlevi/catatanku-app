import React from 'react';

// * TODO: Menyediakan tombol arsipkan/pindahkan untuk mengarsipkan atau memindahkan catatan dari arsip
function ArchiveButton({ id, onArchive, isArchived }) {
    return (
        <button className='archive-button' onClick={() => { onArchive(id) }}>
            {
                isArchived === false
                    ? 'Arsipkan'
                    : 'Pindahkan'
            }
        </button>
    )
}

export default ArchiveButton;