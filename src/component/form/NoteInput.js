import React from 'react';
import PropTypes from 'prop-types';

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 50,
      title: '',
      body: '',
    };

    this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
    this.onBodyChangeHandler = this.onBodyChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onTitleChangeHandler(event) {
    const max = 50;
    const titleInput = event.target.value.slice(0, max);
    const titleInputLength = titleInput.length;

    this.setState((prevState) => {
      return {
        ...prevState,
        title: titleInput,
        counter: max - titleInputLength,
      };
    });
  }

  onBodyChangeHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    return (
      <form className="note-input" onSubmit={this.onSubmitHandler}>
        <p className="note-input__character-limit">
          Sisa karakter: {this.state.counter}
        </p>
        <input
          className="note-input__title"
          type="text"
          placeholder="Ini judul catatanmu ..."
          value={this.state.title}
          onChange={this.onTitleChangeHandler}
        />
        <textarea
          className="note-input__body"
          type="text"
          placeholder="Tulis catatanmu disini ..."
          value={this.state.body}
          onChange={this.onBodyChangeHandler}
        />
        <button className="submit-button" type="submit">
          Tambah
        </button>
      </form>
    );
  }
}

NoteInput.propTypes = {
  addNote: PropTypes.func.isRequired,
};

export default NoteInput;
