const divideTimeIntoUnits = (now: number, blockTime: number) => {
  const timestampInMilliseconds = blockTime * 1000;
  const difference = now - timestampInMilliseconds;
  if (Math.floor(difference / 3600000) > 1) {
    return `${Math.floor(difference / 3600000)} hours ago`;
  } else if (Math.floor(difference / 60000) > 1) {
    return `${Math.floor(difference / 60000)} minutes ago`;
  } else {
    return `${Math.floor(difference / 1000)} seconds ago`;
  }
};

const weiToGwei = (gas: string) => {
  return (Number(gas) / 1e9).toString();
};

export const getBlockItemData = async (blockNum: string) => {
  const now = new Date().getTime();

  try {
    const res = await fetch(
      `${
        process.env.NODE_ENV === "development"
          ? "http://localhost:8080"
          : "https://api.bouncexplorer.site"
      }/block/find/${blockNum}`,
      { cache: "no-cache" }
    );

    const reponseBlockData = await res.json();
    console.log(reponseBlockData);
  } catch (error) {
    console.log(error);
  }
};
