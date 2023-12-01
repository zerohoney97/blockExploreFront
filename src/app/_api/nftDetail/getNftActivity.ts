export const getNftActivity = async () => {
    const res = await fetch(
        `${
            process.env.NODE_ENV == "development"
            ? "http://localhost:8080"
            : "https://api.bouncexplorer.site"
        }/txs`,
        {
            cache : "no-cache",
        }
    );
    const resActivityData = await res.json();
    // return resActivityData;
}