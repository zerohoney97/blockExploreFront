export const getTxItemData = async (txHash: string) => {
  console.log(txHash);
  const responseTransactionData = await fetch(
    `https://api.bouncexplorer.site/tx/${txHash}`
  );
  const transactionData = await responseTransactionData.json();
  console.log(transactionData);
};
