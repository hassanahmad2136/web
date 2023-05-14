import React from 'react';
import './Rankings.css';

const mangaList = [
  {
    rank: 1,
    title: 'One Piece',
    author: 'Eiichiro Oda',
    genre: 'Action, Adventure, Comedy, Drama',
    image: 'https://i.imgur.com/41AdiAL.jpg'
  },
  {
    rank: 2,
    title: 'Naruto',
    author: 'Masashi Kishimoto',
    genre: 'Action, Adventure, Comedy, Drama',
    image: 'https://i.imgur.com/XTY1wvS.jpg'
  },
  {
    rank: 3,
    title: 'Death Note',
    author: 'Tsugumi Ohba',
    genre: 'Mystery, Psychological, Thriller',
    image: 'https://i.imgur.com/6nnF52m.jpg'
  },
  {
    rank: 4,
    title: 'Attack on Titan',
    author: 'Hajime Isayama',
    genre: 'Action, Drama, Horror',
    image: 'https://i.imgur.com/9Xb5x5x.jpg'
  },
  {
    rank: 5,
    title: 'Fullmetal Alchemist',
    author: 'Hiromu Arakawa',
    genre: 'Action, Adventure, Fantasy',
    image: 'https://i.imgur.com/fdG39ad.jpg'
  }
];

const Rankings = () => {
  return (
    <div className="RankingsPage">
      <h1>Top 5 Manga</h1>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Title</th>
            <th>Author</th>
            <th>Genre</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {mangaList.map((manga) => (
            <tr key={manga.rank}>
              <td>{manga.rank}</td>
              <td>{manga.title}</td>
              <td>{manga.author}</td>
              <td>{manga.genre}</td>
              <td><img src={manga.image} alt={manga.title} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Rankings;
