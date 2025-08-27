import React from 'react'
import { Link } from 'react-router-dom'

function HomePage() {
  const containerStyle = {
    maxWidth: 960,
    margin: '0 auto',
    padding: '24px 16px',
  }

  const sectionStyle = {
    background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)',
    border: '1px solid rgba(15, 23, 42, 0.08)',
    borderRadius: 16,
    boxShadow: '0 10px 25px rgba(2, 6, 23, 0.08)',
    padding: 20,
  }

  const headingStyle = {
    fontSize: 28,
    lineHeight: 1.2,
    margin: '0 0 12px 0',
    color: '#0f172a',
  }

  const subheadingStyle = {
    fontSize: 18,
    color: '#475569',
    margin: 0,
  }

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: 16,
    marginTop: 16,
  }

  const cardStyle = {
    backgroundColor: '#ffffff',
    border: '1px solid rgba(15, 23, 42, 0.06)',
    borderRadius: 12,
    padding: 16,
    boxShadow: '0 6px 16px rgba(2, 6, 23, 0.06)',
  }

  const actionButton = {
    display: 'inline-block',
    padding: '10px 14px',
    borderRadius: 10,
    backgroundColor: '#0ea5e9',
    color: '#ffffff',
    fontWeight: 700,
    textDecoration: 'none',
    marginRight: 10,
    transition: 'all 160ms ease',
    boxShadow: '0 2px 8px rgba(14,165,233,0.35)'
  }

  const mutedStyle = { color: '#64748b' }

  const statNumber = { fontSize: 28, fontWeight: 800, color: '#0f172a' }
  const statLabel = { fontSize: 12, color: '#64748b' }

  return (
    <main className="page" style={containerStyle}>
      <header style={{ marginBottom: 20 }}>
        <h1 style={{
          fontSize: 32,
          lineHeight: 1.1,
          margin: 0,
          color: '#0f172a',
          letterSpacing: -0.5,
        }}>
          Welcome to the Attendance System
        </h1>
        <p style={{ ...subheadingStyle, marginTop: 8 }}>
          Manage attendance, review history, and add records efficiently.
        </p>
      </header>

      <section style={{ ...sectionStyle, marginBottom: 16 }}>
        <h2 style={headingStyle}>Quick Actions</h2>
        <div>
          <Link
            to="/attendance"
            style={actionButton}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 6px 16px rgba(14,165,233,0.45)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 2px 8px rgba(14,165,233,0.35)'; }}
          >
            View All Attendance
          </Link>
          <Link
            to="/add-attendance"
            style={{ ...actionButton, backgroundColor: '#22c55e', boxShadow: '0 2px 8px rgba(34,197,94,0.35)' }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 6px 16px rgba(34,197,94,0.45)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 2px 8px rgba(34,197,94,0.35)'; }}
          >
            Add New Attendance
          </Link>
        </div>
      </section>

      <section style={{ ...sectionStyle, marginBottom: 16 }}>
        <h2 style={headingStyle}>Overview</h2>
        <div style={gridStyle}>
          <div style={cardStyle}>
            <div style={statNumber}>42</div>
            <div style={statLabel}>Total Students</div>
          </div>
          <div style={cardStyle}>
            <div style={statNumber}>96%</div>
            <div style={statLabel}>Today Attendance Rate</div>
          </div>
          <div style={cardStyle}>
            <div style={statNumber}>3</div>
            <div style={statLabel}>Classes</div>
          </div>
          <div style={cardStyle}>
            <div style={statNumber}>8</div>
            <div style={statLabel}>New Records This Week</div>
          </div>
        </div>
      </section>

      <section style={{ ...sectionStyle, marginBottom: 16 }}>
        <h2 style={headingStyle}>Recent Activity</h2>
        <p style={mutedStyle}>Latest updates will appear here.</p>
        <ul style={{ margin: 0, paddingLeft: 18 }}>
          <li>Marked Section A - 08:30 AM</li>
          <li>Added record for Juan Dela Cruz - 08:35 AM</li>
          <li>Viewed history for Section B - 09:10 AM</li>
        </ul>
      </section>

      <footer style={{ textAlign: 'center', marginTop: 8 }}>
        <p style={{ fontSize: 12, color: '#94a3b8' }}>Have a productive day!</p>
      </footer>
    </main>
  )
}

export default HomePage
