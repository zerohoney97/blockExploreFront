"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const useSearch = () => {
  const [value, setValue] = useState("");
  const router = useRouter();

  const search= (searchValue: string): string | null => {
    if (searchValue.startsWith("0x") && searchValue.length === 66) {
      return `/transaction/${searchValue}`;
    } else if (!isNaN(Number(searchValue)) && Number(searchValue) > 0) {
      return `/blocks/${searchValue}`;
    } else if (searchValue.length === 42 && searchValue.startsWith("0x")) {
      return `/address/${searchValue}`;
    } else {
      return null;
    }
  };

  const handleInvalidInput = () => {
    
    alert("겁색하신 내용을 찾을 수 없습니다 다시 입력해 주세요");
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