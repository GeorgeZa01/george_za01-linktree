import React from 'react';
import './LinkCard.css';

function LinkCard({ name, url }) {
  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="link-card"
    >
      {name}
    </a>
  );
}

export default LinkCard;