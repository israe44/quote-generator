// components/FavoritesButton.js
import React from 'react';

function FavoritesButton({ isFavorite, onToggleFavorite }) {
  return (
    <button 
      className={`favorite-btn ${isFavorite ? 'favorited' : ''}`}
      onClick={onToggleFavorite}
      title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
    >
      {isFavorite ? '❤️' : '🤍'}
    </button>
  );
}

export default FavoritesButton;