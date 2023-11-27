export const getTxItemData = async (txHash: string) => {
  console.log(txHash);
  const responseTransactionData = await fetch(`${  process.env.NODE_ENV === "development"
  ? "http://localhost:8080"
  : "https://api.bouncexplorer.site"}/tx/2`);
  const transactionData = await responseTransactionData.json();
  console.log(transactionData);
};
