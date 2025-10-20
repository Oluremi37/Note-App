import { listNotes, deleteNote } from "../../../redux/actions/notesActions";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import moment from "moment";
import { images } from "../../../components/images";
import * as Styles from "./NotesListsStyles";
import NoteMenu from "../../../components/noteMenu/NoteMenu";
import { useState, useEffect } from "react";
import DeleteModal from "../../../components/noteMenu/DeleteModal";

const NotesLists = () => {
  const { notes } = useSelector((state) => state.notes);
  const user = JSON.parse(localStorage.getItem("user"));
  const [selectedNoteId, setSelectedNoteId] = useState(null);
  const [modalNoteId, setModalNoteId] = useState(null);
  const dispatch = useDispatch();

  console.log(notes);
  useEffect(() => {
    dispatch(listNotes());
  }, [dispatch]);

  const handleNoteDelete = (id) => {
    dispatch(deleteNote(id));
    setSelectedNoteId(null);
  };

  const handleDeleteClick = (noteId) => {
    setModalNoteId(noteId);
  };
  const handleCancelDelete = () => {
    setModalNoteId(null);
  };

  return (
    <Styles.NotesListsContainer>
      <Styles.NotesListsWrapper>
        {notes.map((note) => (
          <Styles.NotesListsItem>
            <Link to={`/notes/read/${note._id}`}>
              <h4>{note.title}</h4>
            </Link>
            <p>{note.content}</p>
            <Styles.NotesListsTimeLineBox>
              <small>{moment(note.createdAt).fromNow()}</small>
              {/* <small>{moment(note.createdAt).format('llll')}</small> */}
              <p>
                postedBy:{" "}
                <span>{note.postedBy && note.postedBy.firstName}</span>
              </p>

              {user?._id === note.postedBy?._id && (
                <button
                  onClick={() => {
                    setSelectedNoteId(
                      selectedNoteId === note._id ? null : note._id
                    );
                  }}
                >
                  <img src={images.dotsIcon} alt="" />
                </button>
              )}
              {selectedNoteId === note._id && (
                <NoteMenu onDelete={() => handleDeleteClick(note._id)} />
              )}
            </Styles.NotesListsTimeLineBox>
          </Styles.NotesListsItem>
        ))}
      </Styles.NotesListsWrapper>
      {modalNoteId && (
        <DeleteModal
          noteId={modalNoteId}
          onCancel={handleCancelDelete}
          onConfirm={() => handleNoteDelete(modalNoteId)}
        />
      )}
    </Styles.NotesListsContainer>
  );
};

export default NotesLists;
