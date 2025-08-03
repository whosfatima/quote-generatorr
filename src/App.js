import { useState } from "react";
import "./App.css";

const quotes = [
  { text: "Believe in yourself.", author: "Unknown" },
  { text: "Do it with passion or not at all.", author: "Rosa Nouchette Carey" },
  { text: "Success is not for the lazy.", author: "Unknown" },
  { text: "Dream big. Work hard.", author: "Unknown" },
];

function App() {
  const [quote, setQuote] = useState(quotes[0]);

  const getRandomQuote = () => {
    const random = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[random]);
  };

  return (
    <div className="quote-container">
      <div className="quote-box">
        <p className="quote-text">“{quote.text}”</p>
        <p className="quote-author">– {quote.author}</p>
        <button onClick={getRandomQuote}>New Quote</button>
      </div>
    </div>
  );
}

export default App;
