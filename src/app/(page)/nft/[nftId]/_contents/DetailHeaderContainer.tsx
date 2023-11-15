import React from "react";

const NFTDetailHeaderContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <div className="md:flex lg:flex lg:w-2/3">{children}</div>;
};

export default NFTDetailHeaderContainer;
