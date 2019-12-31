package com.Huseyn.shopping.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.Huseyn.shopping.model.Category;

@Component
public class CategoryDAO {

	@Autowired
	DataSource source;
	
	
	public List<Category>getAll(){
		List<Category>list=new ArrayList<>();
		try {
			String query= "SELECT * FROM spring_ng_huseyn_shopping.category";
			Connection con = source.getConnection();
			PreparedStatement statement = con.prepareStatement(query);
			ResultSet res = statement.executeQuery();
				if(res.next()){
					Category category = new Category();
					category.setId(res.getInt("id"));
					category.setName(res.getString("name"));
					list.add(category);
				}
	} catch (Exception e) {
		// TODO: handle exception
		e.printStackTrace();
	}
	return list;
}
}
