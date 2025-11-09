// App.js - UPDATED
import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import FavoritesList from './components/FavoritesList';

function App() {
const quotes = [
    // Your existing quotes...
    {
        text: "You are made of stardust and magical things",
        author: "Unknown Wanderer",
        category: "creativity",
        background: "stardust-bg"
    },
    {
        text: "The only way to do great work is to love what you do",
        author: "Steve Jobs", 
        category: "motivation",
        background: "work-bg"
    },
    // ... your other existing quotes ...

    // NEW QUOTES ADDED BELOW:
    
    // MOTIVATION QUOTES
    {
        text: "Success is not final, failure is not fatal: it is the courage to continue that counts",
        author: "Winston Churchill",
        category: "motivation",
        background: "motivation-bg"
    },
    {
        text: "The way to get started is to quit talking and begin doing",
        author: "Walt Disney",
        category: "motivation",
        background: "motivation-bg"
    },
    {
        text: "Don't watch the clock; do what it does. Keep going",
        author: "Sam Levenson",
        category: "motivation",
        background: "motivation-bg"
    },
    {
        text: "The only limit to our realization of tomorrow will be our doubts of today",
        author: "Franklin D. Roosevelt",
        category: "motivation",
        background: "motivation-bg"
    },
    {
        text: "It does not matter how slowly you go as long as you do not stop",
        author: "Confucius",
        category: "motivation",
        background: "motivation-bg"
    },
    {
        text: "Everything you've ever wanted is on the other side of fear",
        author: "George Addair",
        category: "motivation",
        background: "motivation-bg"
    },
    {
        text: "The best time to plant a tree was 20 years ago. The second best time is now",
        author: "Chinese Proverb",
        category: "motivation",
        background: "motivation-bg"
    },
    {
        text: "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart",
        author: "Roy T. Bennett",
        category: "motivation",
        background: "motivation-bg"
    },

    // WISDOM QUOTES
    {
        text: "The only true wisdom is in knowing you know nothing",
        author: "Socrates",
        category: "wisdom",
        background: "wisdom-bg"
    },
    {
        text: "The mind is everything. What you think you become",
        author: "Buddha",
        category: "wisdom",
        background: "wisdom-bg"
    },
    {
        text: "Life is really simple, but we insist on making it complicated",
        author: "Confucius",
        category: "wisdom",
        background: "wisdom-bg"
    },
    {
        text: "The journey of a thousand miles begins with one step",
        author: "Lao Tzu",
        category: "wisdom",
        background: "wisdom-bg"
    },
    {
        text: "Knowing others is intelligence; knowing yourself is true wisdom",
        author: "Lao Tzu",
        category: "wisdom",
        background: "wisdom-bg"
    },
    {
        text: "The happiness of your life depends upon the quality of your thoughts",
        author: "Marcus Aurelius",
        category: "wisdom",
        background: "wisdom-bg"
    },
    {
        text: "Wisdom is not a product of schooling but of the lifelong attempt to acquire it",
        author: "Albert Einstein",
        category: "wisdom",
        background: "wisdom-bg"
    },

    // LOVE QUOTES
    {
        text: "Love is composed of a single soul inhabiting two bodies",
        author: "Aristotle",
        category: "love",
        background: "love-bg"
    },
    {
        text: "The best thing to hold onto in life is each other",
        author: "Audrey Hepburn",
        category: "love",
        background: "love-bg"
    },
    {
        text: "Love is when the other person's happiness is more important than your own",
        author: "H. Jackson Brown Jr.",
        category: "love",
        background: "love-bg"
    },
    {
        text: "To love and be loved is to feel the sun from both sides",
        author: "David Viscott",
        category: "love",
        background: "love-bg"
    },
    {
        text: "Love isn't something you find. Love is something that finds you",
        author: "Loretta Young",
        category: "love",
        background: "love-bg"
    },
    {
        text: "The greatest happiness of life is the conviction that we are loved",
        author: "Victor Hugo",
        category: "love",
        background: "love-bg"
    },

    // CREATIVITY QUOTES
    {
        text: "Creativity is intelligence having fun",
        author: "Albert Einstein",
        category: "creativity",
        background: "creativity-bg"
    },
    {
        text: "Innovation distinguishes between a leader and a follower",
        author: "Steve Jobs",
        category: "creativity",
        background: "creativity-bg"
    },
    {
        text: "Every artist was first an amateur",
        author: "Ralph Waldo Emerson",
        category: "creativity",
        background: "creativity-bg"
    },
    {
        text: "Creativity takes courage",
        author: "Henri Matisse",
        category: "creativity",
        background: "creativity-bg"
    },
    {
        text: "The chief enemy of creativity is 'good' sense",
        author: "Pablo Picasso",
        category: "creativity",
        background: "creativity-bg"
    },
    {
        text: "You can't use up creativity. The more you use, the more you have",
        author: "Maya Angelou",
        category: "creativity",
        background: "creativity-bg"
    },

    // SPORTS QUOTES
    {
        text: "Just keep going. Everybody gets better if they keep at it",
        author: "Ted Williams",
        category: "sports",
        background: "sports-bg"
    },
    {
        text: "The more difficult the victory, the greater the happiness in winning",
        author: "Pelé",
        category: "sports",
        background: "sports-bg"
    },
    {
        text: "I've missed more than 9000 shots in my career. I've lost almost 300 games. I've failed over and over and over again in my life. And that is why I succeed",
        author: "Michael Jordan",
        category: "sports",
        background: "sports-bg"
    },
    {
        text: "Champions keep playing until they get it right",
        author: "Billie Jean King",
        category: "sports",
        background: "sports-bg"
    },
    {
        text: "It's not whether you get knocked down, it's whether you get up",
        author: "Vince Lombardi",
        category: "sports",
        background: "sports-bg"
    },

    // INSPIRATIONAL QUOTES
    {
        text: "Believe you can and you're halfway there",
        author: "Theodore Roosevelt",
        category: "motivation",
        background: "inspiration-bg"
    },
    {
        text: "Your time is limited, don't waste it living someone else's life",
        author: "Steve Jobs",
        category: "wisdom",
        background: "inspiration-bg"
    },
    {
        text: "The future belongs to those who believe in the beauty of their dreams",
        author: "Eleanor Roosevelt",
        category: "motivation",
        background: "inspiration-bg"
    },
    {
        text: "Strive not to be a success, but rather to be of value",
        author: "Albert Einstein",
        category: "wisdom",
        background: "inspiration-bg"
    },
    {
        text: "The only way to do great work is to love what you do",
        author: "Steve Jobs",
        category: "motivation",
        background: "inspiration-bg"
    },
    {
        text: "If you can dream it, you can do it",
        author: "Walt Disney",
        category: "creativity",
        background: "inspiration-bg"
    },
    {
        text: "The purpose of our lives is to be happy",
        author: "Dalai Lama",
        category: "wisdom",
        background: "inspiration-bg"
    },
    {
        text: "Life is what happens to you while you're busy making other plans",
        author: "John Lennon",
        category: "wisdom",
        background: "inspiration-bg"
    },
    {
        text: "You must be the change you wish to see in the world",
        author: "Mahatma Gandhi",
        category: "wisdom",
        background: "inspiration-bg"
    },
    {
        text: "Spread love everywhere you go. Let no one ever come to you without leaving happier",
        author: "Mother Teresa",
        category: "love",
        background: "inspiration-bg"
    },
    {
        text: "The only thing we have to fear is fear itself",
        author: "Franklin D. Roosevelt",
        category: "motivation",
        background: "inspiration-bg"
    },
    {
        text: "It is during our darkest moments that we must focus to see the light",
        author: "Aristotle",
        category: "wisdom",
        background: "inspiration-bg"
    },
    {
        text: "Whoever is happy will make others happy too",
        author: "Anne Frank",
        category: "wisdom",
        background: "inspiration-bg"
    },
    {
        text: "Do not go where the path may lead, go instead where there is no path and leave a trail",
        author: "Ralph Waldo Emerson",
        category: "creativity",
        background: "inspiration-bg"
    },
    {
        text: "You will face many defeats in life, but never let yourself be defeated",
        author: "Maya Angelou",
        category: "motivation",
        background: "inspiration-bg"
    },
    {
        text: "The greatest glory in living lies not in never falling, but in rising every time we fall",
        author: "Nelson Mandela",
        category: "motivation",
        background: "inspiration-bg"
    },
    {
        text: "In the end, it's not the years in your life that count. It's the life in your years",
        author: "Abraham Lincoln",
        category: "wisdom",
        background: "inspiration-bg"
    },
    {
        text: "Life is either a daring adventure or nothing at all",
        author: "Helen Keller",
        category: "motivation",
        background: "inspiration-bg"
    },
    {
        text: "Many of life's failures are people who did not realize how close they were to success when they gave up",
        author: "Thomas Edison",
        category: "motivation",
        background: "inspiration-bg"
    },
    {
        text: "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose",
        author: "Dr. Seuss",
        category: "motivation",
        background: "inspiration-bg"
    }
];

  const [currentQuote, setCurrentQuote] = useState(quotes[0]);
  const [currentCategory, setCurrentCategory] = useState('all');
  const [favorites, setFavorites] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false);

  const isCurrentQuoteFavorite = favorites.some(fav => 
    fav.text === currentQuote.text && fav.author === currentQuote.author
  );

  const getFilteredQuotes = () => {
    if (currentCategory === 'all') {
      return quotes;
    }
    return quotes.filter(quote => quote.category === currentCategory);
  };

  const getRandomQuote = () => {
    const filteredQuotes = getFilteredQuotes();
    const randomIndex = Math.floor(Math.random() * filteredQuotes.length);
    setCurrentQuote(filteredQuotes[randomIndex]);
  };

  const handleCategoryChange = (category) => {
    setCurrentCategory(category);
    setShowFavorites(false);
    
    const categoryQuotes = category === 'all' ? quotes : quotes.filter(q => q.category === category);
    if (categoryQuotes.length > 0) {
      const randomIndex = Math.floor(Math.random() * categoryQuotes.length);
      setCurrentQuote(categoryQuotes[randomIndex]);
    }
  };

  const toggleFavorite = () => {
    if (isCurrentQuoteFavorite) {
      setFavorites(favorites.filter(fav => 
        !(fav.text === currentQuote.text && fav.author === currentQuote.author)
      ));
    } else {
      setFavorites([...favorites, currentQuote]);
    }
  };

  const removeFavorite = (quoteToRemove) => {
    setFavorites(favorites.filter(fav => 
      !(fav.text === quoteToRemove.text && fav.author === quoteToRemove.author)
    ));
  };

  const clearAllFavorites = () => {
    setFavorites([]);
  };

  const selectFavorite = (quote) => {
    setCurrentQuote(quote);
    setShowFavorites(false);
  };

  const toggleFavoritesView = () => {
    setShowFavorites(!showFavorites);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(`${currentQuote.text} - ${currentQuote.author}`);
    alert('Quote copied to clipboard!');
  };

  const shareOnTwitter = () => {
    const tweetText = `${currentQuote.text} - ${currentQuote.author}`;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;
    window.open(twitterUrl, '_blank');
  };

  return (
    <div className="app">
      <Header />
      <Navbar 
        onCategoryChange={handleCategoryChange} 
        currentCategory={currentCategory}
      />

      {showFavorites ? (
        <FavoritesList 
          favorites={favorites}
          onSelectFavorite={selectFavorite}
          onRemoveFavorite={removeFavorite}
          onBackToQuotes={() => setShowFavorites(false)} // ← ADD THIS LINE
        />
      ) : (
        <Dashboard 
          currentQuote={currentQuote}
          onNewQuote={getRandomQuote}
          onCopyQuote={copyToClipboard}
          onShareTwitter={shareOnTwitter}
          onToggleFavorite={toggleFavorite}
          isFavorite={isCurrentQuoteFavorite}
          onToggleFavoritesView={toggleFavoritesView}
          favoritesCount={favorites.length}
          showFavorites={showFavorites}
        />
      )}
    </div>
  );
}

export default App;