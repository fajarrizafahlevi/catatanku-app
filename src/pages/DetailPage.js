import React from 'react';
import { useParams } from 'react-router-dom';
import NoteDetail from '../component/NoteDetail';
import NotFoundPage from './NotFoundPage';
import {
  getNote,
  deleteNote,
  archiveNote,
  unarchiveNote,
} from '../utils/local-data';
import PropTypes from 'prop-types';

function DetailPageWrapper() {
  const { id } = useParams();
  return <DetailPage id={id} />;
}

class DetailPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      note: getNote(props.id),
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
  }

  onDeleteHandler(id) {
    deleteNote(id);

    this.setState(() => {
      return {
        note: getNote(),
      };
    });
  }

  onArchiveHandler(id) {
    this.state.note.archived === false ? archiveNote(id) : unarchiveNote(id);

    this.setState(() => {
      return {
        note: getNote(),
      };
    });
  }

  render() {
    if (this.state.note === undefined) {
      return <NotFoundPage />;
    }

    return (
      <>
        <NoteDetail
          {...this.state.note}
          onDelete={this.onDeleteHandler}
          onArchive={this.onArchiveHandler}
          isArchived={this.state.note.archived}
        />
      </>
    );
  }
}

DetailPage.propTypes = {
  id: PropTypes.string.isRequired,
};

export default DetailPageWrapper;
