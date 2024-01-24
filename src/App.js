import React, { useState } from 'react';
import './App.css';
import './DemoStyle.css';

function App() {
  const [currentPage, setCurrentPage] = useState('land');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const NavBar = () => {
    return (
      <nav>
        <button onClick={() => handlePageChange('home')}>Home</button>
        <button onClick={() => handlePageChange('about')}>About</button>
        <button onClick={() => handlePageChange('contact')}>Contact</button>
      </nav>
    )
  };

  return (
    <>

      {currentPage === 'land' && (
        <div style={{ textAlign: 'center', marginTop: '20vh' }} onClick={() => handlePageChange('home')}>
          <div style={{ height: '10vw', width: '10vw', backgroundColor: "green", marginLeft: "45vw"}}>
            <p style={{ color: "white" }}>Logo Here</p>
          </div>
          <h1 style={{ color: '#333', fontSize: '4em', fontWeight: '700' }}>
            <span style={{color: '#5CE16E' }}>Scrapy's</span> Commission
          </h1>
        </div>
      )}

      {currentPage === 'home' && (
        <>
          <NavBar />
          <div>
            <h2>Home Page</h2>
            <p>This is the Home page content.</p>
          </div>
        </>
      )}


      {currentPage === 'about' && (
        <>
          <NavBar />
          <div>
            <h2>About Page</h2>
            <p>This is the About page content.</p>
          </div>
        </>
      )}

      {currentPage === 'contact' && (
        <>
          <NavBar />
          <div>
            <h2>Contact Page</h2>
            <p>This is the Contact page content.</p>
          </div>
        </>
      )}
    
    </>
  );
}

export default App;
