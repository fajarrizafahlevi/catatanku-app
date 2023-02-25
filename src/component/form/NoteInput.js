import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../../hooks/useInput';
import LocaleContext from '../../context/LocaleContext';

function NoteInput({ addNote }) {
  const [counter, setCounter] = React.useState(50);
  const [title, setTitle] = React.useState('');
  const [body, onBodyChangeHandler] = useInput('');
  const { locale } = React.useContext(LocaleContext);

  function onTitleChangeHandler(event) {
    const max = 50;
    const titleInput = event.target.value.slice(0, max);
    const titleInputLength = titleInput.length;

    setTitle(titleInput);
    setCounter(max - titleInputLength);
  }

  function onSubmitHandler(event) {
    event.preventDefault();

    const note = {
      title: title,
      body: body,
    };

    addNote(note);
  }

  return (
    <form className="note-input" onSubmit={onSubmitHandler}>
      <p className="note-input__character-limit">
        {locale === 'id' ? 'Sisa karakter: ' : 'Characters left: '}
        {counter}
      </p>
      <input
        className="note-input__title"
        type="text"
        placeholder={
          locale === 'id' ? 'Judul Catatanmu ...' : "Your note's title ..."
        }
        value={title}
        onChange={onTitleChangeHandler}
      />
      <textarea
        className="note-input__body"
        type="text"
        placeholder={
          locale === 'id'
            ? 'Tulis catatanmu di sini ...'
            : ' Write your note here ...'
        }
        value={body}
        onChange={onBodyChangeHandler}
      />
      <button className="submit-button" type="submit">
        {locale === 'id' ? 'Tambah' : 'Add'}
      </button>
    </form>
  );
}

NoteInput.propTypes = {
  addNote: PropTypes.func.isRequired,
};

export default NoteInput;
