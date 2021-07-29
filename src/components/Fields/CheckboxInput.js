import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel
} from "@material-ui/core";
import { useField, useFormikContext } from "formik";

function CheckboxInput({
  name,
  label,
  legend,
  ...rest
}) {
  const [field, meta] = useField(name);
  const { setFieldValue } = useFormikContext();

  const onChange = e => {
    setFieldValue(name, e.target.checked);
  };

  const config = {
    ...field,
    ...rest,
    onChange: onChange,
  };

  const errorConfig = {};

  if (meta && meta.touched && meta.error) {
    errorConfig.error = true;
    errorConfig.helperText = meta.error;
  }

  return (
    <FormControl {...errorConfig}>
      <FormLabel component="legend">{legend}</FormLabel>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox {...config} />}
          label={label}
        />
      </FormGroup>
    </FormControl>
  );
}

export default CheckboxInput;