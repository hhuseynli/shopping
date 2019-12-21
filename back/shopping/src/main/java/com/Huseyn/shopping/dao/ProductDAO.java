package com.Huseyn.shopping.dao;

import java.util.List;

import org.springframework.stereotype.Component;

import com.Huseyn.shopping.database.Database;
import com.Huseyn.shopping.model.Product;

@Component
public class ProductDAO {

	public static List<Product> getAll() {
	 return Database.allProducts;
	}

	public static void save(Product product) {
		
		Database. allProducts.add(product);	
	}

}
