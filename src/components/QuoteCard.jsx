// components/QuoteCard.js - SUPER SIMPLE
import React from 'react';

function QuoteCard({ children, background }) {
  const cardStyle = {
    background: "url('images/image.png') center/cover no-repeat",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white',
    padding: '30px',
    borderRadius: '15px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
    maxWidth: '500px',
    width: '100%',
    margin: '20px 0',
    minHeight: '250px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textShadow: '2px 2px 4px rgba(0,0,0,0.7)'
  };

  return (
    <div style={cardStyle}>
      {children}
    </div>
  );
}

export default QuoteCard;