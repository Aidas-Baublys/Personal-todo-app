import {
  makeStyles,
  Container,
  Typography,
  Button,
  TextField
} from "@material-ui/core";
import { Form, Formik } from "formik";

import UniversalInput from "../components/Fields/UniversalInput";

const useStyles = makeStyles({
  btn: {
    marginTop: "12px",
    fontFamily: "",
    fontSize: "18px",
  }
});

const initialValues = {
  title: "",
  note: "",
};

// const validationSchema = 

const onSubmit = values => {
  console.log("Form values:", values);
};

function Create() {
  const classes = useStyles();

  return (
    <Container>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
      >
        <Form>
          <Typography variant="h1">
            Create new note
          </Typography>
          <UniversalInput
            name="title"
            label="Title"
            variant="outlined"
            margin="normal"
            required
          />
          <TextField
            name="note"
            label="Note"
            required
            multiline
            minRows="4"
            maxRows="5"
            variant="outlined"
            fullWidth
            margin="dense"
          />
          <Button
            className={classes.btn}
            type="submit"
            color="primary"
            variant="contained"
            fullWidth
          >
            Create
          </Button>
        </Form>
      </Formik>
    </Container >
  );
}

export default Create;
