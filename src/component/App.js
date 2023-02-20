import React from 'react';
import AppHeader from './AppHeader';
import AppBody from './AppBody';
import getInitialData from '../utils/getInitialData';

class App extends React.Component {
    constructor(props) {
        super(props);

        // TODO: Memanfaatkan state component untuk menyimpan data catatan
        this.state = {
            notes: getInitialData(),
            keyword: '',
            searchedNotes: [],
        }

        this.onAddNoteEventHandler = this.onAddNoteEventHandler.bind(this);
        this.onDeleteEventHandler = this.onDeleteEventHandler.bind(this);
        this.onArchiveEventHandler = this.onArchiveEventHandler.bind(this);
        this.onSearchChangeEventHandler = this.onSearchChangeEventHandler.bind(this);
        this.onSearchEventHandler = this.onSearchEventHandler.bind(this);
    }

    // TODO: Aplikasi harus mampu menambahkan data catatan baru
    onAddNoteEventHandler({ title, body }) {
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title,
                        body,
                        createdAt: +new Date(),
                        archived: false,
                    }
                ]
            }
        });
    }

    onDeleteEventHandler(id) {
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({ notes })
    }

    onArchiveEventHandler(id) {
        const updateNote = this.state.notes.map(note => note.id === id
            ? { ...note, archived: !note.archived }
            : note);
        this.setState({ notes: updateNote });
    }

    onSearchChangeEventHandler(event) {
        this.setState((prevState) => {
            return {
                ...prevState,
                keyword: event.target.value,
            }
        });
        this.onSearchEventHandler(event.target.value);
    }

    // * TODO: Aplikasi memiliki fitur pencarian catatan berdasarkan kata kunci yang dimasukkan, dengan ketentuan:
    onSearchEventHandler(searchInput) {
        const searchedNotes = this.state.notes.filter(note => note.title.toLowerCase().includes(searchInput.toLowerCase()));
        // * TODO: Jika kolom pencarian tidak kosong, maka aplikasi hanya menampilkan daftar catatan yang judulnya mengandung kata kunci yang dimasukkan
        if (this.state.keyword.length >= 0) {
            this.setState({ searchedNotes: null });
            this.setState({ searchedNotes: searchedNotes });
        } else {
            // * TODO: Jika kolom pencariannya kosong, maka aplikasi menampilkan seluruh catatan
            this.setState({ searchedNotes: null });
            this.setState({ searchedNotes: this.state.notes });
        }
    }

    // TODO: Aplikasi harus mampu menampilkan daftar catatan dengan data awal (initial data) yang telah kami sediakan
    render() {
        return (
            <>
                <AppHeader keyword={this.state.keyword} onSearchChange={this.onSearchChangeEventHandler} />
                <AppBody
                    addNote={this.onAddNoteEventHandler}
                    notes={this.state.notes}
                    searchedTitle={this.state.keyword}
                    searchedNotes={this.state.searchedNotes}
                    onDelete={this.onDeleteEventHandler}
                    onArchive={this.onArchiveEventHandler}
                />
            </>
        );
    }
}

export default App;