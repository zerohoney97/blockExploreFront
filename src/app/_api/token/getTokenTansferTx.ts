import { IResponseTokenData, ITokenListData } from "./interface";

export const getTokenDetail = async (tokenName: string) => {
  const now = new Date().getTime();

  try {
    const res = await fetch(
      `${
        process.env.NODE_ENV === "development"
          ? "http://localhost:8080"
          : "https://api.bouncexplorer.site"
      }/token/find/${tokenName}`,
      { next: { revalidate: 30 } }
    );

    const reponseTokenData: IResponseTokenData = await res.json();
    return reponseTokenData;
  } catch (error) {
    console.log(error);
  }
};