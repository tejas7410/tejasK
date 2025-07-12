import React from 'react';

const UpdatePage: React.FC = () => {
  return (
    <div
      className='bg-off-white'
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Segoe UI, Arial, sans-serif',
      }}
    >
      <div
        className='bg-blue-700 border-white border-2 shadow-white'
        style={{
          padding: '2rem 3rem',
          borderRadius: '16px',
          boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
          textAlign: 'center',
          maxWidth: '400px',
        }}
      >
        <h1 style={{ marginBottom: '1rem', color: 'white', fontWeight: 700 }}>
          Portfolio Update In Progress
        </h1>
        <p style={{ fontSize: '1.1rem', color: 'white', marginBottom: '2rem' }}>
          I'm working on something new! <br />
          Please check back soon.
        </p>
        <div style={{ fontSize: '2rem', color: 'white', marginBottom: '1.5rem' }}>
          <span>Loading</span>
          <span className="dot-animate" style={{ marginLeft: '0.5rem' }}>
            <span style={{ animation: 'blink 1s infinite' }}>.</span>
            <span style={{ animation: 'blink 1s 0.33s infinite' }}>.</span>
            <span style={{ animation: 'blink 1s 0.66s infinite' }}>.</span>
          </span>
        </div>
        <p style={{ color: 'white', fontSize: '0.95rem' }}>
          Approximate date: <strong>18/07/2025</strong>
        </p>
      </div>
      <style>
        {`
          @keyframes blink {
            0%, 80%, 100% { opacity: 0; }
            40% { opacity: 1; }
          }
        `}
      </style>
    </div>
  );
};

export default UpdatePage;