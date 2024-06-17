import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/footer'
import * as React from 'react';

const Main = () => {
  return (
    <div>
    <navbar><Navbar /></navbar>
    <Outlet/>
    <Footer />
    </div>
  )
}

export default Main