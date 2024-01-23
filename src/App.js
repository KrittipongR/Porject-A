import React, { useState } from 'react';
import './App.css';
import './DemoStyle.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <nav>
        <button onClick={() => handlePageChange('home')}>Home</button>
        <button onClick={() => handlePageChange('about')}>About</button>
        <button onClick={() => handlePageChange('contact')}>Contact</button>
      </nav>

      <hr />

      {currentPage === 'home' && (
        <div style={{ textAlign: 'center', marginTop: '20vh' }}>
          <h1 style={{ color: '#333', fontSize: '7em', fontWeight: '700' }}>GAYLORD WAS HERE</h1>
        </div>
      )}


      {currentPage === 'about' && (
        <div>
          <h2>About Page</h2>
          <p>This is the About page content.</p>
        </div>
      )}

      {currentPage === 'contact' && (
        <div>
          <h2>Contact Page</h2>
          <p>This is the Contact page content.</p>
        </div>
      )}
    </div>
  );
}

export default App;
