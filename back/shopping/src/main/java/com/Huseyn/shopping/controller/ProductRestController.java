package com.Huseyn.shopping.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.Huseyn.shopping.dao.ProductDAO;
import com.Huseyn.shopping.model.Product;

@RestController
@RequestMapping(path="/products" )
@CrossOrigin(origins={"http://localhost:4200/"})
public class ProductRestController{
	

	@Autowired
	ProductDAO productDAO;

	@RequestMapping(path="/product",method=RequestMethod.GET)
	public List<Product> getProducts(){
		return productDAO.getAll();
		
	}

@RequestMapping(path="/product", method=RequestMethod.POST)
public Product addProduct(@RequestBody Product product) {
	Integer newId=productDAO.save(product);
	product.setId(newId);
	return product;
 
}

@DeleteMapping(path="/{id}")
public void deleteTodoById(@PathVariable(name="id") Integer id){
	for (int i = 0; i < productDAO.getAll().size(); i++) {
		if(productDAO.getAll().get(i).getId()==id){
			productDAO.deleteSel(id);
		}
	}
	
}







}

