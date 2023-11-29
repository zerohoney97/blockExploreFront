
export const getNfts = async (pageName: string) => {
  const res = await fetch(
    `${
      process.env.NODE_ENV == "development"
        ? "http://localhost:8080"
        : "https://api.bouncexplorer.site"
    }/nft/${pageName}`,
    {
      cache: "no-cache",
    },
  );
  const responseNftData = await res.json();
  return responseNftData;
};
