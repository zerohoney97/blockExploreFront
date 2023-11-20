import React from 'react'
import Header from '@app/_layout/header'
import Footer from '@app/_layout/footer'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
    <Header/>
    <div>{children}</div>
    <Footer/>
    </>
  )
}

export default Layout