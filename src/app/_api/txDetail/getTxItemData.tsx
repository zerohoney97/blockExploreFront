export const getTxItemData = async (txHash: string) => {
  try {
    console.log(txHash);
    const responseTransactionData = await fetch(
      `${
        process.env.NODE_ENV === "development"
          ? "http://localhost:8080"
          : "https://api.bouncexplorer.site"
      }/tx/${txHash}`,
      { cache: "no-cache" }
    );

    const transactionData = await responseTransactionData.json();
    console.log(transactionData);
    return "transactionData";
  } catch (error) {
    console.log(error);
  }
};
