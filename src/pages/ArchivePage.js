import React from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchBar from '../component/SearchBar';
import NoteList from '../component/NoteList';
import { getArchivedNotes } from '../utils/network-data';
import LocaleContext from '../context/LocaleContext';

function ArchivePage() {
  const [searchParams, setSearchParam] = useSearchParams();
  const [notes, setNotes] = React.useState([]);
  const [keyword, setKeyword] = React.useState(() => {
    return searchParams.get('keyword') || '';
  });
  const [initializing, setInitializing] = React.useState(true);
  const { locale } = React.useContext(LocaleContext);

  React.useEffect(() => {
    async function fetchNotesData() {
      const { data } = await getArchivedNotes();
      setNotes(data);
      setInitializing(false);
    }

    fetchNotesData();
  }, []);

  function onKeywordChangeHandler(keyword) {
    setKeyword(keyword);
    setSearchParam({ keyword });
  }

  const filteredNotes = notes.filter((note) => {
    return note.title.toLowerCase().includes(keyword.toLowerCase());
  });

  if (initializing) {
    return (
      <section>
        <h2>{locale === 'id' ? 'Catatan Arsip' : 'Archived Notes'}</h2>
        <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
        <p className="loading-message">
          {locale === 'id' ? 'Memuat catatan ...' : 'Loading notes ...'}
        </p>
      </section>
    );
  }

  return (
    <section>
      <h2>{locale === 'id' ? 'Catatan Arsip' : 'Archived Notes'}</h2>
      <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
      {filteredNotes.length > 0 ? (
        <NoteList notes={filteredNotes} />
      ) : (
        <p className="empty-message">
          {locale === 'id' ? 'Tidak ada catatan' : 'No notes'}
        </p>
      )}
    </section>
  );
}

export default ArchivePage;
