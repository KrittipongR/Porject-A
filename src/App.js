// import React, { useState } from 'react';
import "./App.css";
import "./DemoStyle.css";
// import mainIcon from "/assets/Scrapy_main.PNG";

// const NavBar = ({ currentPage, handlePageChange }) => {
//   return (
//     <nav>
//       {currentPage !== 'home' && <button onClick={() => handlePageChange('home')}>Home</button>}
//       {currentPage !== 'about' && <button onClick={() => handlePageChange('about')}>About</button>}
//       {currentPage !== 'contact' && <button onClick={() => handlePageChange('contact')}>Contact</button>}
//     </nav>
//   );
// };

function App() {
  // const [currentPage, setCurrentPage] = useState('land');

  // const handlePageChange = (page) => {
  //   setCurrentPage(page);
  // };

  return (
    <>
      {
        //Landing
        <div>
        <div className="box1" style={{padding:'11.59vh 10.83vw 11.59vh 10.83vw'}}>
          <div>
            <img src='/assets/Scrapy_main.PNG' alt="Scrapy" />
            <h1><span style={{color:'#5CE16E'}}>Scrapy's</span> <span style={{color:'#302E3D'}}>Commission</span></h1>
          </div>
        </div>
        <div className="box1" style={{flexDirection:"column"}}>
          <h2>Commission Example</h2>
          <div className="box2" style={{paddingTop:'7.81vh'}}>
            <div className="box3">
              <img src="" />
            </div>
            <div className="box3" style={{marginTop:'-3.26vh'}}>
              <img src="" />
            </div>
            <div className="box3">
              <img src="" />
            </div>
            <div className="box3" style={{marginTop:'-3.26vh'}}>
              <img src="" />
            </div>
          </div>
        </div>
        </div>

        //Commission Example



        /* {currentPage === 'land' && (
        <div style={{ textAlign: 'center', marginTop: '20vh' }} onClick={() => handlePageChange('home')}>
          <img src={catIcon} alt="Cat Icon" />
          <h1 style={{ color: '#333', fontSize: '4em', fontWeight: '700' }}>
            <span style={{color: '#5CE16E' }}>Scrapy's</span> Commission
          </h1>
        </div>
      )}

      {currentPage === 'home' && (
        <>
          <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
          <div>
            <h2>Home Page</h2>
            <p>This is the Home page content.</p>
          </div>
        </>
      )}


      {currentPage === 'about' && (
        <>
          <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
          <div>
            <h2>About Page</h2>
            <p>This is the About page content.</p>
          </div>
        </>
      )}

      {currentPage === 'contact' && (
        <>
          <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
          <div>
            <h2>Contact Page</h2>
            <p>This is the Contact page content.</p>
          </div>
        </>
      )} */
      }
    </>
  );
}

export default App;
