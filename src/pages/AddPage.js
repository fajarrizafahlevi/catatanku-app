import React from 'react';
import { useNavigate } from 'react-router-dom';
import { addNote } from '../utils/network-data';
import NoteInput from '../component/form/NoteInput';
import LocaleContext from '../context/LocaleContext';

function AddPage() {
  const { locale } = React.useContext(LocaleContext);
  const navigate = useNavigate();

  async function onAddNoteHandler(note) {
    await addNote(note);
    navigate('/');
  }

  return (
    <section>
      <h2>{locale === 'id' ? 'Tambah Catatan' : 'Add Note'}</h2>
      <NoteInput addNote={onAddNoteHandler} />
    </section>
  );
}

export default AddPage;
