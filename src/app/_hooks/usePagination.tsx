import React, { useEffect, useState } from "react";
import { ItxList } from "@app/_components/transactionTable/interface";
import { Iitem } from "@app/(page)/nft/collections/interface";
const usePagination = <T,>(txList: T[]) => {
  const [page, setPage] = useState<number>(1);
  const [pageTxList, setPageTxList] = useState<T[]>([]);
  const [maxPage, setMaxPage] = useState<number>(0);

  const pageHandler = (selectedPage: number) => {
    if (selectedPage > 0 && selectedPage < maxPage + 1) {
      setPage(selectedPage);
    }
  };
  useEffect(() => {
    setMaxPage(Math.ceil((txList?.length as number) / 25));
    if (page === maxPage) {
      setPageTxList(txList?.slice((page - 1) * 25));
    } else {
      setPageTxList(txList?.slice((page - 1) * 25, page * 25));
    }
  }, [page, maxPage]);
  return {
    page,
    pageHandler,
    maxPage,
    pageTxList,
  };
};

export default usePagination;
