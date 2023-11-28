import { IResponseTokenData, ITokenListData } from "./interface";

const weiToGwei = (gas: string) => {
  return (Number(gas) / 1e9).toString();
};
const weiToEth = (wei: string) => {
  const eth = Number(wei) / 1e18; // 1 Ether = 10^18 Wei
  return eth.toFixed(18); // Format the result with 18 decimal places (optional)
};
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
