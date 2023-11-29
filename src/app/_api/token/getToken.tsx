import { IResponseTokenData, ITokenListData } from "./interface";


export const getToken = async () => {
  const now = new Date().getTime();

  try {
    const res = await fetch(
      `${
        process.env.NODE_ENV === "development"
          ? "http://localhost:8080"
          : "https://api.bouncexplorer.site"
      }/token`,
      { cache: "no-cache" }
    );

    const reponseTokenDataList: IResponseTokenData[] = await res.json();
    
    const tokenListData: ITokenListData[] = reponseTokenDataList.map(
      ({
        circulatingSupply,
        contractAddress,
        createdAt,
        decimal,
        id,
        name,
        ownerAddress,
        symbol,
        updatedAt,
      }) => {
        return {
          decimal,
          symbol,
          holder: circulatingSupply,
          id,
          name,
          timeStamp: createdAt,
        };
      }
    );
    console.log(tokenListData);

    return tokenListData;
  } catch (error) {
    console.log(error);
  }
};
