import React from "react";
import Note from "../Note/Note";
import ApiContext from "../ApiContext";
import { findNote } from "../notes-helpers";
import "./NotePageMain.css";

export default class NotePageMain extends React.Component {
  static defaultProps = {
    match: {
      params: {},
    },
  };
  static contextType = ApiContext;

  handleDeleteNote = (notes_id) => {
    this.props.history.push(`/`);
  };

  render() {
    const { notes = [] } = this.context;
    const { notes_id } = this.props.match.params;
    const note = findNote(notes, notes_id) || { content: "" };

    return (
      <section className="NotePageMain">
        <Note
          notes_id={note.notes_id}
          notes_name={note.notes_name}
          date_published={note.date_published}
          onDeleteNote={this.handleDeleteNote}
        />
        <div className="NotePageMain__content">
          {note.notes_content.split(/\n \r|\n/).map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </section>
    );
  }
}
