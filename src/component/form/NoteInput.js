import React from 'react';

// TODO: Memanfaatkan controlled component dalam membuat form input
class NoteInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: 50,
            title: '',
            body: '',
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    // * TODO: Aplikasi dapat mencegah pengguna untuk memberikan judul catatan lebih dari 50 karakter
    onTitleChangeEventHandler(event) {
        const max = 50;
        const titleInput = event.target.value.slice(0, max);
        const titleInputLength = titleInput.length;

        // * TODO: Menggunakan state dalam melimitasi, bukan atribut maxlength
        this.setState((prevState) => {
            return {
                ...prevState,
                title: titleInput,
                counter: max - titleInputLength,
            }
        });
    }

    onBodyChangeEventHandler(event) {
        this.setState(() => {
            return {
                body: event.target.value,
            }
        });
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNote(this.state);
    }

    // * TODO: Menampilkan jumlah karakter tersisa yang dapat digunakan oleh pengguna
    render() {
        return (
            <form className='note-input' onSubmit={this.onSubmitEventHandler}>
                <h2><i className='fa fa-pencil-square-o'></i> Buat Catatan</h2>
                <p className='note-input__character-limit'>Sisa karakter: {this.state.counter}</p>
                <input
                    className='note-input__title'
                    type="text"
                    placeholder="Ini judul catatanmu ..."
                    value={this.state.title}
                    onChange={this.onTitleChangeEventHandler}
                />
                <textarea
                    className='note-input__body'
                    type="text"
                    placeholder="Tulis catatanmu disini ..."
                    value={this.state.body}
                    onChange={this.onBodyChangeEventHandler} />
                <button className='submit-button' type="submit">Tambah</button>
            </form>
        );
    }
}

export default NoteInput;