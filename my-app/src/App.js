import React, { useEffect, useState } from 'react';
import StockService from './components/StockService';
import StockList from './components/StockList';
import SaveStock from './components/SaveStock';
import GetStockById from './components/GetStockById';

function App() {
  const [stocks, setStocks] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchAllStocks();
  }, []);

  const fetchAllStocks = async () => {
    try {
      const data = await StockService.getAllStocks();
      setStocks(data);
    } catch (error) {
      setMessage('Error fetching stocks');
    }
  };

  const deleteStock = async (id) => {
    try {
      await StockService.deleteStock(id);
      setMessage('Stock deleted successfully');
      fetchAllStocks(); // Refresh the stock list
    } catch (error) {
      setMessage('Failed to delete stock');
    }
  };

  return (
    <div className="App">
      <h1>Stock Management</h1>
      <p>{message}</p>

      <SaveStock />
      <GetStockById />
      <StockList stocks={stocks} onDelete={deleteStock} />
    </div>
  );
}

export default App;
