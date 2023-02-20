import React from 'react';

// TODO: Aplikasi harus menyediakan tombol hapus untuk menghapus data catatan yang disimpan
function DeleteButton({ id, onDelete }) {
    return <button className='delete-button' onClick={() => { onDelete(id) }}>Hapus</button>
}

export default DeleteButton;