import { DatePicker } from "@mui/material";

import React from "react";
import { Controller } from "react-hook-form";
// import moment from "moment";
const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];

const Input = (props) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",

      alignItems: "flex-start",
      width: `${props.width}`,
      columnGap: "20px",
    }}
  >
    {props.label && (
      <label htmlFor={props.name} className={props.labelClass || "label_12"}>
        {props.label}
      </label>
    )}
    <Controller
      render={({ field }) => (
        // <Form.Item name={props.name} label={props.label}>
        //  <DatePicker defaultValue={moment('01/01/2015', dateFormatList[0])} format={dateFormatList} />
        <DatePicker
          {...field}
          name={props?.name}
          className="dateInput"
          placeholder={props.placeholder}
          format="DD-MM-YYYY"
          defaultValue={moment("01/01/2015", dateFormatList[0])}
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
