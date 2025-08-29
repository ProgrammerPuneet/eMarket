package com.digital.market.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.digital.market.entities.Product;



public interface ProductRepository extends JpaRepository<Product, Integer> {

}
