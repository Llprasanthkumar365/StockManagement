package com.example.StockManagement.Repository;

import com.example.StockManagement.Entity.Stocks;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;



@Repository
public interface StockRepository extends JpaRepository<Stocks,Integer> {

}
