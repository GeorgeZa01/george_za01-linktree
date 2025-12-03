import React from 'react';
import LinkCard from './LinkCard';
import socialLinks from './socialLinks'; 
import './App.css'; 

function App() {
  const profileName = "George_za01";
  const profileBio = "Digital Creator | Software Developer";
  // The path starts at the public/ folder for Vite static assets
  const profilePicPath = "/My_Logo.jpg"; 

  return (
    <div className="linktree-container">
      {/* Profile Header */}
      <header className="profile-header">
        <img 
          src={profilePicPath} 
          alt={`${profileName}'s profile`} 
          className="profile-image" 
        />
        <h1>@{profileName.toLowerCase().replace(/\s/g, '')}</h1>
        <p>{profileBio}</p>
      </header>
      
      {/* Links List */}
      <main className="links-list">
        {socialLinks.map((link) => (
          <LinkCard 
            key={link.id} 
            name={link.name} 
            url={link.url} 
          />
        ))}
      </main>

      <footer className="footer">
        Built with 🚀 React & Vite
        <br/>
        by <a href="https://jmdev.co.za" target='_blank' rel="noopener noreferrer" className="footer-link">JMDev</a>
      </footer>
    </div>
  );
}

export default App;