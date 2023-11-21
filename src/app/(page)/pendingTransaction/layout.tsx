import SearchBar from "@app/_components/searchBar";
import Footer from "@app/_layout/footer";
import Header from "@app/_layout/header";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {" "}
      <Header />
      <SearchBar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;