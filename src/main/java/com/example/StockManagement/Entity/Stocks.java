package com.example.StockManagement.Entity;

import jakarta.persistence.*;

import java.io.Serializable;

@Entity
@Table(name = "stocks")
public class Stocks implements Serializable {



    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int stockId;

    @Column(name = "stock_name", nullable = false, length = 45)
    private String stockName;

    @Column(name = "stock_price", nullable = false)
    private int stockPrice;

    @Column(name = "quantity", nullable = false)
    private int quantity;

    @Column(name = "portfolios", nullable = false, length = 45)
    private String portfolios;

    public Stocks() {
    }

    public Stocks(int stockId, String stockName, int stockPrice, int quantity, String portfolios) {
        this.stockId = stockId;
        this.stockName = stockName;
        this.stockPrice = stockPrice;
        this.quantity = quantity;
        this.portfolios = portfolios;
    }
    public int getStockId() {
        return stockId;
    }

    public void setStockId(int stockId) {
        this.stockId = stockId;
    }

    public String getStockName() {
        return stockName;
    }

    public void setStockName(String stockName) {
        this.stockName = stockName;
    }

    public int getStockPrice() {
        return stockPrice;
    }

    public void setStockPrice(int stockPrice) {
        this.stockPrice = stockPrice;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public String getPortfolios() {
        return portfolios;
    }

    public void setPortfolios(String portfolios) {
        this.portfolios = portfolios;
    }


}
