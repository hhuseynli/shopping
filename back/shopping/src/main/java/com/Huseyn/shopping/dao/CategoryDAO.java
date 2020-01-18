package com.Huseyn.shopping.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Huseyn.shopping.model.Category;

public interface CategoryDAO extends JpaRepository<Category,Integer>{
	
}
