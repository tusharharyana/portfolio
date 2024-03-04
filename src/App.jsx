import { useState,useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const[typedText,setTypedText] = useState('');
  const[textIndex,setTypedIndex] = useState(0);
  const fixedText = 'A';
  const targetText = 'Android Developer';
  const lineHeight = 1.2;

useEffect(()=>{
  const typeText = (index) => {
    if (index <= targetText.length) {
      setTypedText(targetText.substring(1, index));
      setTimeout(() => typeText(index + 1), 200); // Adjust typing speed here
    } else {
      setTimeout(() => setTypedText(''), 1000); // Wait for 1 second before restarting
      setTimeout(() => typeText(1), 200); // Restart typing
    }
  };

  // Start typing when the component mounts
  typeText(1);

  // Clean up the timer when the component unmounts
  return () => clearTimeout();
}, []);



  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <nav className="navbar">
        <ul className="nav-list">
          <li className={`nav-item ${currentPage === 'home' ? 'active' : ''}`} onClick={() => handlePageChange('home')}>Home</li>
          <li className={`nav-item ${currentPage === 'about' ? 'active' : ''}`} onClick={() => handlePageChange('about')}>About Me</li>
          <li className={`nav-item ${currentPage === 'skills' ? 'active' : ''}`} onClick={() => handlePageChange('skills')}>Skills</li>
          <li className={`nav-item ${currentPage === 'projects' ? 'active' : ''}`} onClick={() => handlePageChange('projects')}>Projects</li>
          <button className={`nav-item-button ${currentPage === 'contact' ? 'active' : ''}`} onClick={() => handlePageChange('contact')}>Contact Me</button>
        </ul>
      </nav>

      <div className="header">
      <div className='header-left'>
        <div>Hey, I am Tushar</div>
        <div className='android'>{fixedText}<span>{typedText}</span></div>
        <div style={{ height: `${lineHeight * 1.5}em` }}></div>
        <p className='one'>Passionate about creating innovative mobile apps.</p>
        <p>Experienced in Java.</p>
        
        </div>

      <div className='header-right'>
        <img src="/lion.jpg" alt="Your Image"/>
      </div>
      </div>

      <div className="content">
        {/* Content for each page goes here */}
        {currentPage === 'home' && <h1>Home Page Content</h1>}
        {currentPage === 'skills' && <h1>Skill Page Content</h1>}
        {currentPage === 'about' && <h1>About Me Page Content</h1>}
        {currentPage === 'projects' && <h1>Projects Page Content</h1>}
        {currentPage === 'contact' && <h1>Contact Me Page Content</h1>}
      </div>
    </div>
  );
}

export default App;
