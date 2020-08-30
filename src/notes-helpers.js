export const findFolder = (folders = [], folders_id) =>
  folders.find((folder) => folder.folders_id === folders_id);

export const findNote = (notes = [], notes_id) =>
  notes.find((note) => note.notes_id === notes_id);

export const getNotesForFolder = (notes = [], folders_id) =>
  !folders_id ? notes : notes.filter((note) => note.folders_id === folders_id);

export const countNotesForFolder = (notes = [], folders_id) =>
  notes.filter((note) => note.folders_id === folders_id).length;
