import React from 'react'
import '../index.css'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <>

      <div className="container-flex">
        <div><img className="smallImg" src="/images/p1.png"></img></div>
        <div className="rowflex">
          <div><Link to='#'>MENU</Link></div>
          <div><Link to='#'>REGISTRATION</Link></div>
          <div><Link to='#'>OFFERS</Link></div>
          <div><Link to='#'>GALLERY</Link></div>
          <div><Link to='#'>CONTACT</Link></div>
          <div><Link to='#'>LOGIN</Link></div>
        </div>

      </div>

    </>

  )
}
