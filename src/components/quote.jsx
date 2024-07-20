import React, { useState, useEffect } from "react";
import { FaTwitter, FaTumblr, FaQuoteLeft, FaHeart } from "react-icons/fa";

const Quotes = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const getQuote = () => {
    const url = "https://type.fit/api/quotes";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const getRandomQuote = Math.floor(Math.random() * data.length);
        const randomQuote = data[getRandomQuote];

        setQuote(randomQuote.text);
        setAuthor(randomQuote.author);
      })
      .catch((error) => console.error("Error fetching the quote: ", error));
  };

  useEffect(() => {
    getQuote();
  }, []);

  const handleClick = () => {
    getQuote();
  };

  return (
    <>
      <div id="quote-box">
        <div className="quote-text" id="text">
          <p>
            <FaQuoteLeft className="quote" />
            &nbsp;{quote}
          </p>
        </div>
        <div className="quote-author" id="author">
          <p>- {author || "Unknown"}</p>
        </div>
        <div id="buttons">
          <div className="social-media">
            <a
              href={`https://twitter.com/intent/tweet?text=${quote} - ${author || "Unknown"}`}
              id="tweet-quote"
              title="Tweet this quote!"
              target="_top"
              rel="noopener noreferrer"
            >
              <span>
                <FaTwitter className="icons" />
              </span>
            </a>
            <a
              href="https://www.tumblr.com/"
              id="tumblr-quote"
              title="Post this quote on tumblr!"
              target="_blank"
              rel="noreferrer"
            >
              <span>
                <FaTumblr className="icons" />
              </span>
            </a>
          </div>
          <button onClick={handleClick} id="new-quote">
            New Quote
          </button>
        </div>
      </div>
      <div className="footer">
        Created By{" "}
        
          Chehak Makkar<FaHeart />
        
      </div>
    </>
  );
};

export default Quotes;
