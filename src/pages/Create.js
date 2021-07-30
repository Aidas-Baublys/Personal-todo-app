import {
  makeStyles,
  Container,
  Typography,
  Button
} from "@material-ui/core";
import { Form, Formik } from "formik";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";

import UniversalInput from "../components/Fields/UniversalInput";

const useStyles = makeStyles({
  btn: {
    marginTop: "14px",
    fontFamily: "",
    fontSize: "18px",
  }
});

const initialValues = {
  title: "",
  note: "",
};

const validationSchema = Yup.object({
  title: Yup.string(),
  note: Yup.string(),
});

function Create() {
  const history = useHistory();
  const classes = useStyles();

  const onSubmit = async values => {
    await fetch("http://localhost:8000/notes", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        title: values.title,
        details: values.note
      })
    }).then(() => history.replace("/"));
  };

  return (
    <Container>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
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
          <UniversalInput
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
