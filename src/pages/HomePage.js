import React from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchBar from '../component/SearchBar';
import NoteList from '../component/NoteList';
import { getActiveNotes } from '../utils/network-data';
import LocaleContext from '../context/LocaleContext';

function HomePage() {
  const [searchParams, setSearchParam] = useSearchParams();
  const [notes, setNotes] = React.useState([]);
  const [keyword, setKeyword] = React.useState(() => {
    return searchParams.get('keyword') || '';
  });
  const [initializing, setInitializing] = React.useState(true);
  const { locale } = React.useContext(LocaleContext);

  React.useEffect(() => {
    async function fetchNotesData() {
      const { data } = await getActiveNotes();

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
        <h2>{locale === 'id' ? 'Catatan Aktif' : 'Active Notes'}</h2>
        <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
        <p className="loading-message">
          {locale === 'id' ? 'Memuat catatan ...' : 'Loading notes ...'}
        </p>
      </section>
    );
  }

  return (
    <section>
      <h2>{locale === 'id' ? 'Catatan Aktif' : 'Active Notes'}</h2>
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

export default HomePage;
