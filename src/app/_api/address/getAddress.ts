import { IAddressData, IAddressItem } from "./interface";


const divideTimeIntoUnits = (now: number, addressTime: number) => {
  const timestampInMilliseconds = addressTime * 1000;

  const difference = now - timestampInMilliseconds;
  if (Math.floor(difference / 3600000) > 1) {
    return `${Math.floor(difference / 3600000)} hours ago`;
  } else if (Math.floor(difference / 60000) > 1) {
    return `${Math.floor(difference / 60000)} minutes ago`;
  } else {
    return `${Math.floor(difference / 1000)} seconds ago`;
  }
};



export const getAddress = async (address: string) => {
  console.log("확인", address);

  const res = await fetch(
    `${
      process.env.NODE_ENV === "development"
        ? "http://localhost:8080"
        : "https://api.bouncexplorer.site"
    }/eoa/find/${address}`,
    { cache: "no-cache" }
  );

  const responseAddressData: IAddressData = await res.json();

  return responseAddressData;
};
