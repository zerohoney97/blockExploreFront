"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import useGetProvider from "./useGetProvider";

const useSearch = () => {
  const [value, setValue] = useState("");
  const router = useRouter();
  const web3 = useGetProvider();
  const routeCaOrEoa = async (hash: string) => {
    const code = await web3.eth.getCode(hash);
    if (code !== "0x") {
      router.push(`/ca/${hash}`);
      return "contract";
    } else {
      router.push(`/address/${hash}`);
      return "EOA";
    }
  };

  const search = (searchValue: string): string | null => {
    if (searchValue.startsWith("0x") && searchValue.length === 42) {
      routeCaOrEoa(searchValue);
      return null;
    } else if (searchValue.startsWith("0x") && searchValue.length === 66) {
      return `/transaction/${searchValue}`;
    } else if (!isNaN(Number(searchValue)) && Number(searchValue) > 0) {
      return `/blocks/${searchValue}`;
    } else {
      return null;
    }
  };

  const handleInvalidInput = () => {
    router.push("/error");
  };

  const handleSearch = () => {
    const searchType = search(value);
    if (searchType) {
      router.push(searchType);
    } else {
      handleInvalidInput();
    }
  };

  return {
    value,
    setValue,
    handleSearch,
  };
};

export default useSearch;
