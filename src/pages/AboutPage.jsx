import React from 'react'

function AboutPage() {
  return (
    <div className="page">
      {/* TODO: Add a main heading for this page */}
      {/* Hint: Use an <h1> or <h2> tag with a descriptive title */}
      <h2 className='about-page-subheader'>About the Attendance System</h2>
      
      {/* TODO: Create an about section */}
      {/* Hint: Write a paragraph explaining what your attendance system does */}
      <p>This is a student attendance management system built with React.</p>
      
      {/* TODO: Add a features list */}
      {/* Hint: Use <ul> and <li> elements to list the main features */}
      <div>
        <h2>Features</h2>
        <ul>
          <li>Track student attendance</li>
          <li>View attendance history</li>
          <li>Add new attendance records</li>
        </ul>
      </div>
      
      {/* TODO: Add technology information */}
      {/* Hint: Explain what technologies you used to build this app */}
      <div>
        <h2>Technology</h2>
        <p>Built with React, React Router, and modern web technologies.</p>
      </div>
      
      {/* TODO: Add contact information */}
      {/* Hint: Include your name, class, or any other relevant details */}
      
      {/* TODO: Add a version or build date */}
      {/* Hint: Show when this application was created or last updated */}
    </div>
  )
}

export default AboutPage
