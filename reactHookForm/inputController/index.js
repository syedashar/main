
import { TextField } from "@mui/material";
import React from "react";
import { Controller } from "react-hook-form";
const Input = (props) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      width: `${props.width}`,
    }}
  >
    <Controller
      render={({ field }) => (
        // <Form.Item name={props.name} label={props.label}>
        <TextField
          autoFocus
          fullWidth
          id={props?.name}
          label={props?.name}
          sx={{ marginBottom: 4 }}
          {...field}
          className="formInput"
        />
      )}
      name={props.name}
      rules={{ required: true }}
      // control={props.control}
      {...props.propsInput}
    />

    {props?.errors && props?.errors[props.name] && (
      <p className="error_message">
        {props?.errors && props?.errors[props.name]?.message}
      </p>
    )}
  </div>
);
export default Input;
