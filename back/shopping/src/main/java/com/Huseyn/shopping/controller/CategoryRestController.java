package com.Huseyn.shopping.controller;


import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.Huseyn.shopping.dao.CategoryDAO;
import com.Huseyn.shopping.model.Category;

@RestController
@RequestMapping(path="/categories")
@CrossOrigin(origins={"http://localhost:4200"})
public class CategoryRestController {
	
	@Autowired
	CategoryDAO categoryDAO;
	
	
	@RequestMapping(path= "/category",method=RequestMethod.GET)
	public List<Category> getCategories(){
		
		return categoryDAO.getAll();
	}
	
	@RequestMapping(path = "/category",method= RequestMethod.POST)
	public Integer saveCategory(@RequestBody Category category){
		Integer newId=  categoryDAO.save(category);
		category.setId(newId);
		return newId;
	
	}
	
	
}
