import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'

export default function Layout({logdata,setLogData}) {
  return <>
  <Navbar logdata={logdata} setLogData={setLogData}></Navbar>
  <Outlet></Outlet>
  <Footer></Footer>
  </>
}
