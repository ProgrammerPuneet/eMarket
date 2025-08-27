package com.digital.market.repositories;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.digital.market.entities.Category;

@Repository
public interface CategoryRepository extends JpaRepository<Category, UUID> {
}
