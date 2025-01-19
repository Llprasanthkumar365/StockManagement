package com.example.StockManagement.Service;

import com.example.StockManagement.Entity.Stocks;

import com.example.StockManagement.Repository.StockRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StockService {

    @Autowired
    private StockRepository stockRepository;

    // Create or Update Stock
    public Stocks saveStock(Stocks stock) {
        return stockRepository.save(stock);
    }

    // Get a Stock by ID
    public Optional<Stocks> getStockById(int stockId) {
        return stockRepository.findById(stockId);
    }

    // Get All Stocks
    public List<Stocks> getAllStocks() {
        return stockRepository.findAll();
    }

    // Delete a Stock by ID
    public void deleteStockById(int stockId) {
        stockRepository.deleteById(stockId);
    }
}
