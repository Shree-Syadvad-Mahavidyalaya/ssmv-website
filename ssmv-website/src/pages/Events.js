import React from 'react'
import Footer from '../components/Footer/Footer'
import AllEvents from '../components/AllEvents/AllEvents'
import DoubleNavbar from '../components/Header/Header'

export default function Events() {
  return (
    <>
    <div><DoubleNavbar/></div>
    <div><AllEvents/></div>
    <div><Footer/></div>
    </>
  )
}
