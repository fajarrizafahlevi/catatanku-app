import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import NoteDetail from '../component/NoteDetail';
import NotFoundPage from './NotFoundPage';
import {
  getNote,
  deleteNote,
  archiveNote,
  unarchiveNote,
} from '../utils/network-data';
import LocaleContext from '../context/LocaleContext';

function DetailPage() {
  const [note, setNote] = React.useState(null);
  const [initializing, setInitializing] = React.useState(true);
  const { locale } = React.useContext(LocaleContext);
  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchNoteDetail() {
      const { data } = await getNote(id);

      setNote(data);
      setInitializing(false);
    }

    fetchNoteDetail();
  });

  async function onArchiveHandler(id) {
    note.archived === false ? await archiveNote(id) : await unarchiveNote(id);

    const { data } = await getNote();

    setNote(data);
    navigate('/');
  }

  async function onDeleteHandler(id) {
    await deleteNote(id);

    const { data } = await getNote();

    setNote(data);
    navigate('/');
  }

  if (initializing) {
    return (
      <section>
        <p className="loading-message" style={{ marginTop: 0 }}>
          {locale === 'id' ? 'Memuat catatan ...' : 'Loading note ...'}
        </p>
      </section>
    );
  }

  if (note === null) {
    return <NotFoundPage />;
  }

  return (
    <>
      <NoteDetail
        {...note}
        isArchived={note.archived}
        onArchive={onArchiveHandler}
        deleteNote={onDeleteHandler}
      />
    </>
  );
}

export default DetailPage;
