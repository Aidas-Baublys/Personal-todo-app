import { Card, CardContent, CardHeader, IconButton, Typography } from "@material-ui/core";
import { DeleteOutlined } from "@material-ui/icons";

function NoteCard({ note, deleteNote }) {
  return (
    <Card elevation={10}>
      <CardHeader
        action={
          <IconButton onClick={() => deleteNote(note.id)}>
            <DeleteOutlined />
          </IconButton>
        }
        title={note.title}
      />
      <CardContent>
        <Typography variant="body2">
          {note.details}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default NoteCard;
