import { Container, Grid, Button } from "@material-ui/core";
import { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import Masonry from "react-masonry-css";

import NoteCard from './../components/NoteCard/index';

function Notes() {
  const [notes, setNotes] = useState([]);
  const history = useHistory();

  useEffect(() => {
    async function fetchData() {
      await fetch("http://localhost:8000/notes")
        .then(res => res.json())
        .then(data => setNotes(data));
    }
    fetchData();
  }, []);

  const deleteNote = async id => {
    await fetch("http://localhost:8000/notes/" + id, {
      method: "DELETE",
    });
    setNotes(notes.filter(note => note.id !== id));
  };

  return (
    <Container>
      <Masonry
        breakpointCols={3}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {notes.map(note => (
          <article key={note.id}>
            <NoteCard note={note} deleteNote={deleteNote} />
          </article>
        ))}
      </Masonry>
    </Container>
  );
}

export default Notes;