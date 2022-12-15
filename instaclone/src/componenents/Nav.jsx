import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Nav = ({ authenticated, user, handleLogOut}) => {
  let authenticatedOptions
  if (user) {
    let id = `/user/${user.id}`
    authenticatedOptions = (
      <nav className="navBar">
        <Link className='link' to="/feed">
          <h3>Home</h3>
          </Link>
        <Link className='link' id="profile" to={id}>
          <h3>Profile</h3>
        </Link>
        <Link className='link' id="sign-out" onClick={handleLogOut} to="/">
          <h3>Sign Out</h3>
        </Link>
        
      </nav>
    )
  }

  const openOptions = (
  <nav className="navBar">
      <Link className='link' to="/">
    <h3>Home</h3>
      </Link>

      <Link className='link' to="/login">
    <h3>Login</h3>
      </Link>
      <Link className='link' to="/register">
    <h3>Register</h3>
      </Link>
  </nav>
)
  return(
<header className="navBar">

  <Link to ="/">
    </Link>
      {authenticated && user ? authenticatedOptions : openOptions}
    </header>
  )
}

export default Nav