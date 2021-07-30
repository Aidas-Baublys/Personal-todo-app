import { Container, Grid, Button } from "@material-ui/core";
import { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';

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
      <Grid container spacing={3}>
        {notes.map(note => (
          <Grid key={note.id} item xs={12} sm={6} md={3}>
            <NoteCard note={note} deleteNote={deleteNote} />
          </Grid>
        ))}
        <Grid item xs={12} sm={12} md={12}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={() => history.push("/create")}
          >
            New note
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Notes;