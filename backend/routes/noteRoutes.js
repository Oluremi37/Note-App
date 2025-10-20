import express from 'express';
import { notesControllers } from '../controllers/notesControllers.js';
import { auth } from './../middlewares/auth.js';

const noteRouter = express();
noteRouter.post('/create',auth, notesControllers.createNote);
noteRouter.get("/", notesControllers.getNotes);
noteRouter.get("/note/:noteId", notesControllers.getNoteBtId);
noteRouter.delete("/note/delete/:noteId", auth, notesControllers.deleteNote);




export default noteRouter;