import axios from 'axios';

const API_URL = 'http://localhost:8080/stocks';

const getAllStocks = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching stocks');
  }
};

const saveStock = async (stock) => {
  try {
    await axios.post(API_URL, stock);
  } catch (error) {
    throw new Error('Error saving stock');
  }
};

const deleteStock = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    throw new Error('Error deleting stock');
  }
};

const getStockById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching stock by ID');
  }
};

export default { getAllStocks, saveStock, deleteStock, getStockById };
