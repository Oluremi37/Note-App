import Notes from '../models/notesModel.js';

export const notesControllers = {
  createNote: async (req, res) => {
    try {
      const { title, subtitle, content } = req.body;

      if (!title || !subtitle || !content)
        return res.status(400).json({ msg: "please fill in all fields." });

      const newNote = await Notes({
        title,
        subtitle,
        content,
        postedBy: req.user,
      });

      await (await newNote.save()).populate('postedBy', '-password');
      return res
        .status(201)
        .json({ msg: "New note added successfully", data: newNote });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  getNotes: async (req, res) => {
    try {
      const notes = await Notes.find().populate('postedBy', '-password');
      return res.status(200).json({ msg: "All notes", data: notes });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  getNoteBtId: async (req, res) => {
    try {
      const noteId = req.params.noteId;
      const notes = await Notes.findById(noteId);

      return res.status(200).json({ msg: "Single notes by Id", data: notes });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  deleteNote: async (req, res) => {
    try {
      const noteId = req.params.noteId;
      const notes = await Notes.findByIdAndDelete(noteId);

      return res
        .status(200)
        .json({ msg: "Note deleted successfully", data: notes });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  editNote: async (req, res) => {
    try {
      const noteId = req.params.noteId;
      const noteData = req.body;
      const { content, title, subtitle } = noteData;
      const updateNote = await Notes.findOne({ noteId });

      if (!noteId) {
        return res.status(400).json({ msg: "This note does not exist" });
      }
      const editNote = await Notes.findByIdAndUpdate(
        noteId,
        {
          content,
          isComplete,
        },
        { new: true }
      );

      res.status(200).json({ msg: "Updated successfully", data: editNote });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};