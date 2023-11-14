"use client";
import React, { useEffect } from "react";

interface TabButtonProps {
  toggleLabelNum: string | null;
  toggleHandler: (label: string) => void;
  label: string;
}

const TabButton: React.FC<TabButtonProps> = ({
  toggleLabelNum,
  toggleHandler,
  label,
}) => {
  const isActiveCSS =
    "bg-green-500/60 text-xs text-081D35 py-1 px-2  w-auto  rounded m-1 flex justify-center items-center";
  const isNotActiveCSS =
    "bg-gray text-081D35 text-xs  w-auto py-1 px-2  rounded m-1 flex justify-center items-center";
  useEffect(() => {
    console.log(toggleLabelNum);
  }, [toggleLabelNum]);
  return (
    <button
      className={toggleLabelNum === label ? isActiveCSS : isNotActiveCSS }
      onClick={() => {
        toggleHandler(label);
      }}
    >
      {label}
    </button>
  );
};

export default TabButton;
