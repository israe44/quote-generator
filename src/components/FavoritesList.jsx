// components/FavoritesList.js - CLEAN VERSION
import React from 'react';
import SparkButton from './SparkButton';

function FavoritesList({ favorites, onSelectFavorite, onRemoveFavorite, onBackToQuotes }) {
  return (
    <div className="favorites-list">
      <div className="favorites-header">
        <h2>Your Favorite Quotes ❤️</h2>
        {/* SMALL BACK BUTTON */}
        <SparkButton onClick={onBackToQuotes} variant="secondary" className="small-back-btn">
          Back
        </SparkButton>
      </div>

      {favorites.length === 0 ? (
        <div className="empty-favorites">
          <p>No favorites yet!</p>
          <p>Start adding quotes you love by clicking the heart button.</p>
          <div className="empty-heart">🤍</div>
          {/* SMALL BACK BUTTON FOR EMPTY STATE */}
          
        </div>
      ) : (
        <div className="favorites-grid">
          {favorites.map((quote, index) => (
            <div key={index} className="favorite-item">
              <div 
                className="favorite-content"
                onClick={() => onSelectFavorite(quote)}
              >
                <p className="favorite-text">"{quote.text}"</p>
                <p className="favorite-author">- {quote.author}</p>
                <span className="favorite-category">{quote.category}</span>
              </div>
              {/* X BUTTON TO REMOVE FROM FAVORITES */}
              <button 
                className="remove-favorite"
                onClick={() => onRemoveFavorite(quote)}
                title="Remove from favorites"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FavoritesList;