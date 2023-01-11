import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";
export const Schema = yup
  .object({
    username: yup.string().required(),
    password: yup.string().required(),
    
  })
  .required();
