export const findFolder = (folders = [], folderId) =>
  folders.find((folder) => folder.folders_id === folderId);

export const findNote = (notes = [], noteId) =>
  notes.find((note) => note.notes_id === noteId);

export const getNotesForFolder = (notes = [], folderId) =>
  !folderId ? notes : notes.filter((note) => note.folders_id === folderId);

export const countNotesForFolder = (notes = [], folderId) =>
  notes.filter((note) => note.folders_id === folderId).length;
