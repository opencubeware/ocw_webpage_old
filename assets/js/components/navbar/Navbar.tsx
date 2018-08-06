import * as React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () =>
  <div className="navbar">
    <div className="grid"/>
    <div className="grid-6">
      <div className="navbar__wrapper">
        <div className="ocw-logo">
          <Link to="/">
            <img className="ocw__logo--image" src="images/logo.png" />
          </Link>
        </div>
        <div>
          <ul className="navbar__items">
            <li><Link className="navbar__item" to="/news">News</Link></li>
            <div className="slash">/</div>
            <li><Link className="navbar__item" to="/events">Events</Link></li>
            <div className="slash">/</div>
            <li><Link className="navbar__item" to="/about">About</Link></li>
            <div className="slash">/</div>
            <li><Link className="navbar__item" to="/team">Team</Link></li>
            <div className="slash">/</div>
            <li><Link className="navbar__item" to="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
    </div>
    <div className="grid"/>
  </div>

export default Navbar
