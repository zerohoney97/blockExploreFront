import { IResponseDataSequlErr } from "./interface";

export const isResponseDataSequlErr = (
  data: any,
): data is IResponseDataSequlErr => {
  console.log(data && data.status === "SequelizeConnectionError")
  return data && data.status === "SequelizeConnectionError";
};

