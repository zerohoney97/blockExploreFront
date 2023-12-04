import { IResponseDataSequlErr } from "../interface";
import { isResponseDataSequlErr } from "../utils";

export const getNfts = async (pageName: string) => {
  const res = await fetch(
    `${
      process.env.NODE_ENV == "development"
        ? "http://localhost:8080"
        : "https://api.bouncexplorer.site"
    }/nft/${pageName}`,
    {
      cache: "no-cache",
    }
  );
  const responseNftData: IResponseDataSequlErr = await res.json();
  if (isResponseDataSequlErr(responseNftData)) {
    return null;
  }
  console.log("리스댓", responseNftData);
  return responseNftData;
};
