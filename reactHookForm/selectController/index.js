import React from "react";
import { Controller } from "react-hook-form";
import { Select as SelectAnt } from "@mui/material";

const { Option } = SelectAnt;
const Select = (props) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      width: `${props.width}`,
    }}
  >
    {props.label && (
      <label htmlFor={props.name} className={ props.labelClass || "label_12"}>
        {props.label}
      </label>
    )}
    <Controller
      render={({ field }) => (
        // <Form.Item name={props.name} label={props.label}>
        <SelectAnt field={field} props={props} />
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
export default Select;









   //   <SelectAnt
        //     {...field}
        //     name={props.name}
        //     showSearch
        //     placeholder="e.g BMW"
        //     optionFilterProp="children"
        //     // onChange={onChange}
        //     // onSearch={onSearch}
        //     style={{width: '100%'}}
        //     filterOption={(input, option) =>
        //       option.children.toLowerCase().includes(input.toLowerCase())
        //     }
        //   >
        //     <Option value="jack">Jack</Option>
        //     <Option value="lucy">Lucy</Option>
        //     <Option value="tom">Tom</Option>
        //   </SelectAnt>
        // </>