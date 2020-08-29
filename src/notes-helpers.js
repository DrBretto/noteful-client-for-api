export const findFolder = (folders = [], folders_id) =>
  folders.find((folder) => folder.folders_id === folders_id);

export const findNote = (notes = [], noteId) =>
  notes.find((note) => note.notes_id === noteId);

export const getNotesForFolder = (notes = [], folders_id) =>
  !folders_id ? notes : notes.filter((note) => note.folders_id === folders_id);

export const countNotesForFolder = (notes = [], folderId) =>
  notes.filter((note) => note.folders_id === folderId).length;
