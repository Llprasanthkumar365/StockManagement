package com.example.StockManagement.Controller;


import com.example.StockManagement.Entity.Stocks;
import com.example.StockManagement.Service.StockService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/stocks")
@CrossOrigin(origins = "http://localhost:3000")
public class StockController {

    @Autowired
    private StockService stockService;

    // Create or Update Stocks
    @PostMapping
    public ResponseEntity<Stocks> saveStock(@RequestBody Stocks stocks) {
        Stocks savedStock = stockService.saveStock(stocks);
        return ResponseEntity.ok(savedStock);
    }

    // Get Stocks by ID
    @GetMapping("/{id}")
    public ResponseEntity<Optional<Stocks>> getStockById(@PathVariable int id) {
        Optional<Stocks> Stocks = stockService.getStockById(id);
        if (Stocks.isPresent()) {
            return ResponseEntity.ok(Stocks);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Get All Stocks
    @GetMapping
    public ResponseEntity<List<Stocks>> getAllStocks() {
        List<Stocks> stocks = stockService.getAllStocks();
        return ResponseEntity.ok(stocks);
    }

    // Delete Stocks by ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteStockById(@PathVariable int id) {
        stockService.deleteStockById(id);
        return ResponseEntity.noContent().build();
    }
}
