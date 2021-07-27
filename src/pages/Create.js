import { makeStyles, Container, Typography, Button, ButtonGroup, TextField, Radio, RadioGroup, FormControlLabel } from "@material-ui/core";
import { AcUnitOutlined, ArrowForward } from "@material-ui/icons";

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
      <RadioGroup color="primary">
        <FormControlLabel value="1" control={<Radio />} label="Babkes" />
        <FormControlLabel value="2" control={<Radio />} label="Cash" />
        <FormControlLabel value="3" control={<Radio />} label="Eurai" />
      </RadioGroup>
      <form noValidate autoComplete="off">
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
      </form>
      <Typography
        variant="h6"
        color="textPrimary"
        component="h2"
        gutterBottom
      >
        Create new note
      </Typography>
      <Button
        type="submit"
        variant="contained"
        color="primary"
      >
        Press
      </Button>
      <Button
        className={classes.btn}
        type="submit"
        variant="outlined"
        color="secondary"
        onClick={() => console.log("Veikia")}
        startIcon={<AcUnitOutlined />}
        endIcon={<ArrowForward />}
      >
        Maroz
      </Button>
      <ButtonGroup
        color="primary"
        variant="contained"
      >
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Tres</Button>
        <Button>Q</Button>
      </ButtonGroup>
    </Container>
  );
}

export default Create;
