// components/Dashboard.js
import React from 'react';
import QuoteCard from './QuoteCard';
import Quote from './Quote';
import SparkButton from './SparkButton';
import FavoritesButton from './FavoritesButton';

function Dashboard({ 
  currentQuote, 
  onNewQuote, 
  onCopyQuote, 
  onShareTwitter, 
  onToggleFavorite, 
  isFavorite,
  onToggleFavoritesView,
  favoritesCount 
}) {
  return (
    <div className="dashboard">
      <QuoteCard background={currentQuote.background}>
        <div className="quote-header">
          <FavoritesButton 
            isFavorite={isFavorite} 
            onToggleFavorite={onToggleFavorite} 
          />
        </div>
        <Quote text={currentQuote.text} author={currentQuote.author} />
      </QuoteCard>
      
      <div className="actions">
        <SparkButton onClick={onNewQuote}>New Quote</SparkButton>
        <SparkButton onClick={onCopyQuote} variant="secondary">Copy</SparkButton>
        <SparkButton onClick={onShareTwitter} variant="tertiary">Share on Twitter</SparkButton>
        <SparkButton onClick={onToggleFavoritesView} variant="secondary">
          View Favorites ({favoritesCount})
        </SparkButton>
      </div>
    </div>
  );
}

export default Dashboard;