import React from 'react'

function AboutPage() {
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

  const badgeStyle = {
    display: 'inline-block',
    padding: '6px 10px',
    borderRadius: 999,
    backgroundColor: '#eef2ff',
    color: '#3730a3',
    fontSize: 12,
    fontWeight: 600,
    marginRight: 8,
    marginBottom: 8,
  }

  const listStyle = { margin: 0, paddingLeft: 18, color: '#0f172a' }

  const mutedStyle = { color: '#64748b' }

  const footerNoteStyle = { fontSize: 12, color: '#94a3b8' }

  const lastUpdated = new Date().toLocaleDateString()

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
          BGFC Attendance System
        </h1>
        <p style={{ ...subheadingStyle, marginTop: 8 }}>
          Simple, fast, and reliable attendance tracking for students and teams.
        </p>
      </header>

      <section style={{ ...sectionStyle, marginBottom: 16 }}>
        <h2 style={headingStyle}>About</h2>
        <p style={{ ...mutedStyle, fontSize: 16 }}>
          This system helps you record daily attendance, review history, and add new
          records with ease. It is designed to be intuitive on mobile and desktop,
          with a focus on speed and clarity.
        </p>
      </section>

      <section style={{ ...sectionStyle, marginBottom: 16 }}>
        <h2 style={headingStyle}>Features</h2>
        <div style={gridStyle}>
          <div style={cardStyle}>
            <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 6 }}>📍 Quick Marking</div>
            <p style={mutedStyle}>Mark present/absent in a few taps.</p>
          </div>
          <div style={cardStyle}>
            <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 6 }}>🗂️ History</div>
            <p style={mutedStyle}>View attendance trends and past records.</p>
          </div>
          <div style={cardStyle}>
            <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 6 }}>➕ Add Records</div>
            <p style={mutedStyle}>Create new entries with contextual details.</p>
          </div>
          <div style={cardStyle}>
            <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 6 }}>📱 Mobile-first</div>
            <p style={mutedStyle}>Responsive layout optimized for small screens.</p>
          </div>
        </div>
      </section>

      <section style={{ ...sectionStyle, marginBottom: 16 }}>
        <h2 style={headingStyle}>Technology</h2>
        <p style={{ ...mutedStyle, marginBottom: 12 }}>Built with modern web tooling:</p>
        <div>
          <a
            href="https://react.dev/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ ...badgeStyle, textDecoration: 'none', transition: 'all 160ms ease', boxShadow: '0 1px 0 rgba(2,6,23,0.06)' }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#e0e7ff'; e.currentTarget.style.boxShadow = '0 4px 10px rgba(2,6,23,0.08)'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#eef2ff'; e.currentTarget.style.boxShadow = '0 1px 0 rgba(2,6,23,0.06)'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            React
          </a>
          <a
            href="https://vitejs.dev/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ ...badgeStyle, textDecoration: 'none', transition: 'all 160ms ease', boxShadow: '0 1px 0 rgba(2,6,23,0.06)' }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#e0e7ff'; e.currentTarget.style.boxShadow = '0 4px 10px rgba(2,6,23,0.08)'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#eef2ff'; e.currentTarget.style.boxShadow = '0 1px 0 rgba(2,6,23,0.06)'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            Vite
          </a>
          <a
            href="https://reactrouter.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ ...badgeStyle, textDecoration: 'none', transition: 'all 160ms ease', boxShadow: '0 1px 0 rgba(2,6,23,0.06)' }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#e0e7ff'; e.currentTarget.style.boxShadow = '0 4px 10px rgba(2,6,23,0.08)'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#eef2ff'; e.currentTarget.style.boxShadow = '0 1px 0 rgba(2,6,23,0.06)'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            React Router
          </a>
          <a
            href="https://developer.mozilla.org/docs/Web/JavaScript/Guide/Modules"
            target="_blank"
            rel="noopener noreferrer"
            style={{ ...badgeStyle, textDecoration: 'none', transition: 'all 160ms ease', boxShadow: '0 1px 0 rgba(2,6,23,0.06)' }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#e0e7ff'; e.currentTarget.style.boxShadow = '0 4px 10px rgba(2,6,23,0.08)'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#eef2ff'; e.currentTarget.style.boxShadow = '0 1px 0 rgba(2,6,23,0.06)'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            ES Modules
          </a>
        </div>
      </section>

      <section style={{ ...sectionStyle, marginBottom: 16 }}>
        <h2 style={headingStyle}>Contact</h2>
        <ul style={listStyle}>
          <li>Instructor/Owner: <span style={mutedStyle}>Your Name</span></li>
          <li>Class/Team: <span style={mutedStyle}>BGFC</span></li>
          <li>Email: <span style={mutedStyle}>you@example.com</span></li>
        </ul>
      </section>

      <footer style={{ textAlign: 'center', marginTop: 8 }}>
        <p style={footerNoteStyle}>Version 1.0 • Last updated {lastUpdated}</p>
      </footer>
    </main>
  )
}

export default AboutPage
