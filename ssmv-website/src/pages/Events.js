import React from 'react'
import Footer from '../components/Footer/Footer'
import AllEvents from '../components/AllEvents/AllEvents'
import DoubleNavbar from '../components/header/doubleNavbar'

export default function Events() {
  return (
    <>
    <div><DoubleNavbar/></div>
    <div><AllEvents/></div>
    <div><Footer/></div>
    </>
  )
}
