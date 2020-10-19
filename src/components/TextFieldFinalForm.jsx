import { TextField } from "@material-ui/core";
import React from "react";

export default function TextFieldFinalForm({
  input: { value, name, InputProps, ...input },
  meta,
  ...rest
}) {
  const showError = meta.error && meta.touched;
  return (
    <TextField
      value={value}
      name={name}
      InputProps={{
        ...InputProps,
        ...input
      }}
      {...rest}
      helperText={showError ? meta.error : undefined}
      error={showError}
    />
  );
}
