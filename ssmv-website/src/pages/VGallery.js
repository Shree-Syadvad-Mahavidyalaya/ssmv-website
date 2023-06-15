import React from 'react'
import AllVG from '../components/AllGallery/AllVG'
import Footer from '../components/Footer/Footer'
import DoubleNavbar from '../components/header/doubleNavbar'

export default function Gallery() {
  return (
    <>
    <div><DoubleNavbar/></div>
    <div><AllVG/></div>
    <div><Footer/></div>
    </>
  )
}
