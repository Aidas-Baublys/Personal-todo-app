import {
  makeStyles,
  Container,
  Typography,
  Button
} from "@material-ui/core";
import { Form, Formik } from "formik";
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

const onSubmit = values => {
  console.log("Form values:", values);
};

function Create() {
  const classes = useStyles();

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
