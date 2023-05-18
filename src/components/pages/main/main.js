import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createRoot } from 'react-dom';
import './main.css';
import ReactDOM from 'react-dom';
import MangaPage from './manga';

const Main = () => {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3000/main")
      .then((response) => response.json())
      .then((data) => setBooks(data));
  }, []);

  const handleClick = (manga) => {
    createRoot(document.getElementById('root')).render(
      <MangaPage manga={manga} />
    );
  };

  return (
    <div className="mainPage">
      <div className="topMangaSection">
        <h2 className="sectionTitle">Top Manga</h2>
        <ul className="mangaList">
          {books.map((book) => (
            <li key={book.name}>
              <img src={book.coverPage} alt={book.name} onClick={() => handleClick(book)} />
            </li>
          ))}
        </ul>
      </div>
      <div className="latestMangaSection">
        <h2 className="sectionTitle">Latest Manga</h2>
        <ul className="mangaList">
          {books.map((book) => (
            <li key={book.name}>
              <img src={book.coverPage} alt={book.name} onClick={() => handleClick(book)} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Main;
