export const getTxItemData = async (txHash: string) => {
  try {
    console.log(txHash);
    const responseTransactionData = await fetch(
      `${
        process.env.NODE_ENV === "development"
          ? "http://localhost:8080"
          : "https://api.bouncexplorer.site"
      }/tx/${txHash}`
    );

    // console.log(responseTransactionData.json());
    const transactionData: any = await responseTransactionData.json();
    return "transactionData";
  } catch (error) {
    console.log(error);
  }
};
