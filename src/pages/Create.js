import {
  makeStyles,
  Container,
  Typography,
  Button,
  TextField
} from "@material-ui/core";
import { Form, Formik } from "formik";

const useStyles = makeStyles({
  // btn: {
  //   fontSize: 60,
  //   background: "violet",
  //   "&:hover": {
  //     background: "blue",
  //   }
  // }
});

function Create() {
  const classes = useStyles();

  return (
    <Container>
      <Formik>
        <Form>
          <Typography variant="h1">
            Create new note
          </Typography>
          <TextField
            label="Write here"
            required
            fullWidth
            variant="outlined"
            margin="normal"
          />
          <TextField
            label="Also here"
            required
            multiline
            minRows="4"
            maxRows="5"
            variant="outlined"
            fullWidth
            margin="dense"
          />
          <Button
            type="submit"
            color="primary"
            variant="contained"
          >
            Create
          </Button>
        </Form>
      </Formik>
    </Container >
  );
}

export default Create;
