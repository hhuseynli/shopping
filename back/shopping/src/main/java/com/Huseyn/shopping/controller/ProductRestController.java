package com.Huseyn.shopping.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.Huseyn.shopping.dao.ProductDAO;
import com.Huseyn.shopping.database.Database;
import com.Huseyn.shopping.model.Product;

@RestController
@RequestMapping(path="/products" )
@CrossOrigin(origins={"http://localhost:4200/"})
public class ProductRestController{
	

@RequestMapping(path="/product", method=RequestMethod.GET)
public List<Product> getProduct() {
return ProductDAO.getAll() ;

} 

@RequestMapping(path="/product", method=RequestMethod.POST)
public void addProduct(@RequestBody Product product) {
	product.setId(Database.allProducts.size()+1);
ProductDAO.save(product) ;


}
}

