import { Modal } from '../../../components/modal/Modal';
import Overlay from '../../../components/Overlay';
import Notes from '../Notes';
import * as Styles from './NoteCreateStyles';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createNote, deleteNote } from "../../../redux/actions/notesActions";
import { FaTrash, FaEdit } from "react-icons/fa";


const NoteCreate = () => {
    const Dispatch = useDispatch()
    const [noteData, setNoteData] = useState({
        title: '',
        subtitle: '',
        content: ''
    })
    const handleInput = (e) => {
        setNoteData({ ...noteData, [e.target.name]: e.target.value });
    };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(noteData);
    Dispatch(createNote(noteData))
  };

   const handleDelete = () => {
     if (!noteData.id) {
       alert("No note selected to delete!");
       return;
     }
     Dispatch(deleteNote(noteData.id));
     setNoteData({ id: "", title: "", subtitle: "", content: "" });
   };
  
  return (
    <>
      <Overlay />
      <Notes />
      <div>
        <Modal>
          <Styles.NoteCreateTitle>Create New Note</Styles.NoteCreateTitle>
          <Styles.NoteCreateForm onSubmit={handleSubmit}>
            <div>
              <label htmlFor="">Write your note Title</label>
              <input type="text" name="title" onChange={handleInput} />
            </div>

            <div>
              <label htmlFor="">Write your note subtitle</label>
              <input type="text" name="subtitle" onChange={handleInput} />
            </div>

            <div>
              <label htmlFor="">Write your note Content</label>
              <textarea name="content" onChange={handleInput} />
            </div>
            <button>Submit</button>
            <div>
              <button type="button" onClick={handleDelete}>
                <FaTrash /> Delete
              </button>
            </div>
          </Styles.NoteCreateForm>
        </Modal>
      </div>
    </>
  );

  

  
   
}

export default NoteCreate;