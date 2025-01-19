import React, { useState } from 'react';
import StockService from './StockService';

function SaveStock() {
  const [stockName, setStockName] = useState('');
  const [stockPrice, setStockPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [portfolios, setPortfolios] = useState('');
  const [message, setMessage] = useState('');

  const handleSaveStock = async (e) => {
    e.preventDefault();
    const newStock = {
      stockName,
      stockPrice: parseInt(stockPrice),
      quantity: parseInt(quantity),
      portfolios,
    };

    try {
      await StockService.saveStock(newStock);
      setMessage('Stock saved successfully!');
      setStockName('');
      setStockPrice('');
      setQuantity('');
      setPortfolios('');
    } catch (error) {
      setMessage('Failed to save stock');
    }
  };

  return (
    <div>
      <h2>Save Stock</h2>
      <form onSubmit={handleSaveStock}>
        <input
          type="text"
          placeholder="Stock Name"
          value={stockName}
          onChange={(e) => setStockName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Stock Price"
          value={stockPrice}
          onChange={(e) => setStockPrice(e.target.value)}
        />
        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <input
          type="text"
          placeholder="Portfolios"
          value={portfolios}
          onChange={(e) => setPortfolios(e.target.value)}
        />
        <button type="submit">Save</button>
      </form>
      <p>{message}</p>
    </div>
  );
}

export default SaveStock;
