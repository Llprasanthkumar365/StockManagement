import React, { useState } from 'react';
import StockService from './StockService';

function GetStockById() {
  const [stockId, setStockId] = useState('');
  const [stock, setStock] = useState(null);
  const [message, setMessage] = useState('');

  const handleGetStockById = async () => {
    try {
      const fetchedStock = await StockService.getStockById(stockId);
      if (fetchedStock) {
        setStock(fetchedStock);
      } else {
        setMessage('Stock not found');
      }
    } catch (error) {
      setMessage('Error fetching stock');
    }
  };

  return (
    <div>
      <h2>Get Stock by ID</h2>
      <input
        type="number"
        placeholder="Enter Stock ID"
        value={stockId}
        onChange={(e) => setStockId(e.target.value)}
      />
      <button onClick={handleGetStockById}>Get Stock</button>

      {stock && (
        <div>
          <h3>Stock Details</h3>
          <p>Name: {stock.stockName}</p>
          <p>Price: {stock.stockPrice}</p>
          <p>Quantity: {stock.quantity}</p>
          <p>Portfolio: {stock.portfolios}</p>
        </div>
      )}
      <p>{message}</p>
    </div>
  );
}

export default GetStockById;
