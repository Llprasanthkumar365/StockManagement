import React from 'react';

function StockList({ stocks, onDelete }) {
  return (
    <div>
      {stocks.length > 0 ? (
        <ul>
          {stocks.map((stock) => (
            <li key={stock.stockId}>
              {stock.stockName} - Price: {stock.stockPrice}, Quantity: {stock.quantity}, Portfolio: {stock.portfolios}
              <button onClick={() => onDelete(stock.stockId)}>Delete</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No stocks available.</p>
      )}
    </div>
  );
}

export default StockList;
