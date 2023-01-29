import React from "react";
import { useNavigate } from "react-router-dom";
import NoteInput from "../components/NoteInput";
import { addNote } from "../utils/api";

function AddPages() {
  const navigate = useNavigate()

  async function onAddNoteHandler(note) {
    await addNote(note);
    navigate('/')
  }

  return (
    <main>
      <NoteInput addNote={onAddNoteHandler} />
    </main>
  );
}

export default AddPages;
