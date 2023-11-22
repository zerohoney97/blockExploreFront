import React from "react";
import Header from "../../_layout/header";
import Footer from "../../_layout/footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      <div className="max-w-[1400px] m-auto sm:px-0 md:px-0 pt-0 p-8">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
