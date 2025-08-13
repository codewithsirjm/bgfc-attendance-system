import React from 'react'

function AttendancePage() {
  return (
    <div className="page">
      {/* TODO: Add a main heading for this page */}
      {/* Hint: Use an <h1> or <h2> tag with a descriptive title */}
      <h2>View Attendance Records</h2>
      
      {/* TODO: Create a search and filter section */}
      {/* Hint: Add input fields for searching by name, filtering by date range, etc. */}
      <div>
        <h3>Search & Filters</h3>
        <p>Search and filter controls will be added here</p>
      </div>
      
      {/* TODO: Create the attendance table */}
      {/* Hint: Use a <table> element with <thead> and <tbody> */}
      <div>
        <h3>Attendance Records</h3>
        <table>
          {/* TODO: Add table headers */}
          {/* Hint: Create <th> elements for Date, Student Name, Status, and any other columns you want */}
          <thead>
            <tr>
              <th>Date</th>
              <th>Student Name</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* TODO: Add table rows with sample data */}
            {/* Hint: Create <tr> elements with <td> cells containing sample attendance records */}
            <tr>
              <td>2025-01-15</td>
              <td>John Doe</td>
              <td>Present</td>
            </tr>
            <tr>
              <td>2025-01-15</td>
              <td>Jane Smith</td>
              <td>Present</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      {/* TODO: Add pagination controls */}
      {/* Hint: Create Previous/Next buttons and page numbers for large datasets */}
      
      {/* TODO: Add export functionality */}
      {/* Hint: Add a button to export attendance data to CSV or PDF */}
    </div>
  )
}

export default AttendancePage
