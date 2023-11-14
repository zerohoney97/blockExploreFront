import React from 'react'
import Header from "../../_layout/header";
import Footer from "../../_layout/footer";

const Layout = ({children} : {children: React.ReactNode}) => {
  return (
    <div>
        <Header />
        {children}
        <Footer />
    </div>
  )
}

export default Layout