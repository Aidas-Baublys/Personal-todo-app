import { Container, Grid, Paper, Button } from "@material-ui/core";
import { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';

function Notes() {
  const [notes, setNotes] = useState([]);
  const history = useHistory();

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