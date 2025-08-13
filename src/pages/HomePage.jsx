import React from 'react'
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <div className="page">
      <h1 className='homepage-header'>Bucas Grande Foundation College - IT collab work</h1>
      {/* TODO: Add a main heading for this page */}
      {/* Hint: Use an <h1> or <h2> tag with a descriptive title */}
      <h2>Welcome to the Attendance System</h2>
      
      {/* TODO: Create a welcome section */}
      {/* Hint: Add a paragraph explaining what this page is for */}
      <p>This is the main dashboard for managing student attendance.</p>
      
      {/* TODO: Add navigation links to other pages */}
      {/* Hint: Use the Link component from react-router-dom to create navigation */}
      <div>
        <Link to="/attendance">View All Attendance</Link>
        <Link to="/add-attendance">Add New Attendance</Link>
      </div>
      
      {/* TODO: Create a summary statistics section */}
      {/* Hint: Add cards or sections showing total students, attendance rate, etc. */}
      <div>
        <h3>Statistics</h3>
        <p>Statistics will be displayed here</p>
      </div>
      
      {/* TODO: Add quick action buttons */}
      {/* Hint: Create buttons that link to other pages like /attendance and /add-attendance */}
      
      {/* TODO: Add a recent activity section */}
      {/* Hint: Show the latest attendance entries or system updates */}
    </div>
  )
}

export default HomePage
