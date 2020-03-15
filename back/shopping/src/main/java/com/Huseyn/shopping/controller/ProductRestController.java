package com.Huseyn.shopping.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.Huseyn.shopping.dao.ProductsDAO;
import com.Huseyn.shopping.model.Product;
import com.Huseyn.shopping.model.SearchModel;

@RestController
@RequestMapping(path="/products" )
@CrossOrigin(origins={"http://localhost:4200/"})
public class ProductRestController{
	

	@Autowired
	ProductsDAO productDAO;



@RequestMapping(path="/product", method=RequestMethod.POST)
public Product addProduct(@RequestBody Product product) {
	
	return productDAO.save(product);
 
}

@DeleteMapping(path="/{id}")
public void deleteTodoById(@PathVariable(name="id") Integer id){
			productDAO.deleteById(id);

	
}
@GetMapping(path="/findRange/{begin}")
public List<Product> findInRange(@PathVariable(name="begin") Integer begin){
	return productDAO.findRange(begin, 12);
}
@GetMapping(path="/findRange/{begin}/{username}")
public List<Product> findInRangeByUsername(@PathVariable(name="begin") Integer begin, @PathVariable String username){
	return productDAO.findRangeByUsername(username, begin, 12 );
}

@PostMapping(path="/searchRange")
public List<Product> searchInRange(@RequestBody SearchModel search){
	return productDAO.findSearchInRange(search.getSearch(), search.getBegin(), search.getLength());
}







}

