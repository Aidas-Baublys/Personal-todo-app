import { Container, Grid, Paper } from "@material-ui/core";
import { useState, useEffect } from "react";

function Notes() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/notes")
      .then(res => res.json())
      .then(data => setNotes(data));
  }, []);

  return (
    <Container>
      <Grid container spacing={2}>
        {notes.map(note => (
          <Grid key={note.id} item xs={12} sm={6} md={3}>
            <Paper>
              {note.title}
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Notes;