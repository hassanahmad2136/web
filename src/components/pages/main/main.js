import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './main.css';
import axios from 'axios';

const Main = () => {
  const [topManga, setTopManga] = useState([]);
  const [latestManga, setLatestManga] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/server/top-manga')
      .then(response => {
        setTopManga(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios.get('http://localhost:5000/server/latest-manga')
      .then(response => {
        setLatestManga(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const topMangaList = topManga.map(manga => {
    return (
      <li key={manga.id} className="mangaItem">
        <Link to={`/manga/${manga.id}`}>
          <img src={manga.image} alt={manga.title} />
          <div className="overlay">
            <h3>{manga.title}</h3>
            <p>{manga.author}</p>
          </div>
        </Link>
      </li>
    );
  });

  const latestMangaList = latestManga.map(manga => {
    return (
      <li key={manga.id} className="mangaItem">
        <Link to={`/manga/${manga.id}`}>
          <img src={manga.image} alt={manga.title} />
          <div className="overlay">
            <h3>{manga.title}</h3>
            <p>{manga.author}</p>
          </div>
        </Link>
      </li>
    );
  });

  return (
    <div className="mainPage">
      <div className="topMangaSection">
        <h2 className="sectionTitle">Top Manga</h2>
        <ul className="mangaList">
          {topMangaList}
        </ul>
      </div>
      <div className="latestMangaSection">
        <h2 className="sectionTitle">Latest Manga</h2>
        <ul className="mangaList">
          {latestMangaList}
        </ul>
      </div>
    </div>
  );
}

export default Main;
