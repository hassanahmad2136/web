import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './buyingManga.css';

const BuyingManga = () => {
  const [mangaList, setMangaList] = useState([]);
  const [selectedManga, setSelectedManga] = useState(null);
  const [buyerName, setBuyerName] = useState('');
  const [buyerEmail, setBuyerEmail] = useState('');
  const [buyerPhone, setBuyerPhone] = useState('');
  const [paymentOption, setPaymentOption] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/server/manga-list')
      .then(response => {
        setMangaList(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleMangaSelect = (e) => {
    const selectedId = e.target.value;
    const selectedManga = mangaList.find(manga => manga.id === selectedId);
    setSelectedManga(selectedManga);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Here you can send the buyer's information and selected manga to the server for storage in the database
    const buyerInfo = {
      name: buyerName,
      email: buyerEmail,
      phone: buyerPhone,
      manga: selectedManga,
      paymentOption: paymentOption
    };

    console.log(buyerInfo);

    // Clear the form fields and selected manga
    setSelectedManga(null);
    setBuyerName('');
    setBuyerEmail('');
    setBuyerPhone('');
    setPaymentOption('');
  };

  return (
    <div className="buyingMangaPage">
      <h2>Buying a Manga</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="mangaSearch">Search for a Manga:</label>
          <input type="text" id="mangaSearch" className="form-control" placeholder="Search by title or author" />
        </div>

        <div className="form-group">
          <label htmlFor="mangaSelect">Select a Manga:</label>
          <select id="mangaSelect" className="form-control" value={selectedManga ? selectedManga.id : ''} onChange={handleMangaSelect}>
            <option value="">Select a manga...</option>
            {mangaList.map(manga => (
              <option key={manga.id} value={manga.id}>{manga.title} by {manga.author}</option>
            ))}
          </select>

          {selectedManga && (
            <div className="selectedManga">
              <h3>{selectedManga.title}</h3>
              <img src={selectedManga.image} alt={selectedManga.title} />
              <p>{selectedManga.description}</p>
              <h4>${selectedManga.price}</h4>
            </div>
          )}
        </div>

        <h2>Buyer Information</h2>
        <div className="form-group">
          <label htmlFor="buyerName">Name:</label>
          <input type="text" id="buyerName" className="form-control" value={buyerName} onChange={e => setBuyerName(e.target.value)} required />
        </div>

        <div className="form-group">
          <label htmlFor="buyerEmail">Email:</label>
          <input type="email" id="buyerEmail" className="form-control" value={buyerEmail} onChange={e => setBuyerEmail(e.target.value)} required />
</div>
<div className="form-group">
      <label htmlFor="buyerPhone">Phone Number:</label>
      <input type="tel" id="buyerPhone" className="form-control" value={buyerPhone} onChange={e => setBuyerPhone(e.target.value)} required />
    </div>

    <div className="form-group">
      <label>Payment Option:</label>
      <div className="paymentOptions">
        <div className="paymentOption">
          <input type="radio" id="creditCard" name="paymentOption" value="Credit Card" checked={paymentOption === "Credit Card"} onChange={e => setPaymentOption(e.target.value)} />
          <label htmlFor="creditCard">Credit Card</label>
        </div>
        <div className="paymentOption">
          <input type="radio" id="paypal" name="paymentOption" value="PayPal" checked={paymentOption === "PayPal"} onChange={e => setPaymentOption(e.target.value)} />
          <label htmlFor="paypal">PayPal</label>
        </div>
        <div className="paymentOption">
          <input type="radio" id="cash" name="paymentOption" value="Cash" checked={paymentOption === "Cash"} onChange={e => setPaymentOption(e.target.value)} />
          <label htmlFor="cash">Cash</label>
        </div>
      </div>
    </div>

    <button type="submit" className="btn"> BUY
    <span class="icon-right"></span>
  <span class="icon-right after"></span>
    </button>
  </form>

  <Link to="/" className="backToHome">Back to Home</Link>
</div>

);
};

export default BuyingManga
