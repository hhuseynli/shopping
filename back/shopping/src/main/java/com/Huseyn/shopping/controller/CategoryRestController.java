package com.Huseyn.shopping.controller;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
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
	
}
