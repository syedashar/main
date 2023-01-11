import React,{useState} from "react";
import { Controller } from "react-hook-form";

const CheckBoxController = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: `${props.width}`,
      }}
      className="checkbox_container"
    >
      <Controller
        render={({ field }) => (
          <input
            type="checkbox"
            {...field}
            name={props?.name}
            // onChange={() => setCheck((value) => !value)}
            checked={props.check}
          />
        )}
        name={props.name}
        rules={{ required: true }}
        // control={props.control}
        {...props.propsInput}
      />
      {props.label && (
        <label htmlFor={props.name} className={props.labelClass || "label_16"}>
          {props.label}
        </label>
      )}

      {props?.errors && props?.errors[props.name] && (
        <p className="error_message">
          {props?.errors && props?.errors[props.name]?.message}
        </p>
      )}
    </div>
  );
  
}
export default CheckBoxController;
