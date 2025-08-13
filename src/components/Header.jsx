import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="header">
      {/* TODO: Add a main title for the application */}
      {/* Hint: Use an <h1> tag with the name of your attendance system */}
      <h1>Attendance System</h1>
      
      {/* TODO: Create the navigation menu */}
      {/* Hint: Use a <nav> element with proper semantic markup */}
      <nav>
        {/* TODO: Add navigation links */}
        {/* Hint: Use the Link component from react-router-dom to create navigation links */}
        <Link to="/">Home</Link>
        <Link to="/attendance">View Attendance</Link>
        <Link to="/add-attendance">Add Attendance</Link>
        <Link to="/about">About</Link>
      </nav>
      
      {/* TODO: Add a logo or icon */}
      {/* Hint: Consider adding an SVG icon or image to make the header more appealing */}
      
      {/* TODO: Add responsive navigation */}
      {/* Hint: Consider adding a mobile menu for smaller screens */}
    </header>
  )
}

export default Header
