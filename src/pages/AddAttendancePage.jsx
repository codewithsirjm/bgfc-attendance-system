import React from 'react'

function AddAttendancePage() {
  return (
    <div className="page">
      {/* TODO: Add a main heading for this page */}
      {/* Hint: Use an <h1> or <h2> tag with a descriptive title */}
      <h2>Add New Attendance Record</h2>
      
      {/* TODO: Create the form container */}
      {/* Hint: Use a <form> element with proper action and method attributes */}
      <form>
        {/* TODO: Add a form title */}
        {/* Hint: Use an <h3> tag to describe what the form is for */}
        <h3>Attendance Entry Form</h3>
        
        {/* TODO: Create the date input field */}
        {/* Hint: Use <input type="date"> with proper label and name attribute */}
        <div>
          <label htmlFor="date">Date:</label>
          <input type="date" id="date" name="date" />
        </div>
        
        {/* TODO: Create the student name input field */}
        {/* Hint: Use <input type="text"> with placeholder text and validation */}
        <div>
          <label htmlFor="studentName">Student Name:</label>
          <input type="text" id="studentName" name="studentName" placeholder="Enter student name" />
        </div>
        
        {/* TODO: Create the status dropdown */}
        {/* Hint: Use <select> with <option> elements for Present, Absent, Late */}
        <div>
          <label htmlFor="status">Status:</label>
          <select id="status" name="status">
            <option value="">Select status</option>
            <option value="present">Present</option>
            <option value="absent">Absent</option>
            <option value="late">Late</option>
          </select>
        </div>
        
        {/* TODO: Add more form fields as needed */}
        {/* Hint: Consider adding Time, Notes, Class/Section, or other relevant fields */}
        
        {/* TODO: Add form buttons */}
        {/* Hint: Create Submit and Reset buttons with proper types */}
        <div>
          <button type="submit">Submit</button>
          <button type="button">Reset</button>
        </div>
        
        {/* TODO: Add form validation */}
        {/* Hint: Use state to track errors and display validation messages */}
        
        {/* TODO: Add success/error message display */}
        {/* Hint: Use state to show confirmation messages after form submission */}
      </form>
    </div>
  )
}

export default AddAttendancePage
