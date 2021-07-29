import { MenuItem, TextField } from "@material-ui/core";
import { useField, useFormikContext } from "formik";

function UniversalInput({
  name,
  type,
  select,
  options,
  ...rest
}) {
  // Needed to link custom fields to formik.
  const [field, meta] = useField(name);

  //  Needed for select field to pass values to formik.
  const { setFieldValue } = useFormikContext();

  //  Needed for select field to pass values to formik.
  const onChange = e => {
    setFieldValue(name, e.target.value);
  };

  // Needed for date field to move label out of the way of placeholder text.
  const InputLabel = {
    shrink: true
  };

  const config = {
    ...field,
    ...rest,
    type,
    InputLabelProps: type ? InputLabel : undefined,
    select,
    fullWidth: true,
  };

  if (meta && meta.touched && meta.error) {
    config.error = true;
    config.helperText = meta.error;
  }

  return (
    <TextField
      {...config}
      {...select && onChange}
    >
      {
        // Needed for select field to display options.
        options && Object.keys(options).map((key, value) => {
          return (
            <MenuItem key={value} value={key}>
              {options[key]}
            </MenuItem>
          );
        })}
    </TextField>
  );
}

export default UniversalInput;