package com.Huseyn.shopping.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
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
				while(res.next()){
					Category category = new Category();
					category.setId(res.getInt("id"));
					category.setName(res.getString("name"));
					list.add(category);
				}
				con.close();
				statement.close();
				res.close();
	} catch (Exception e) {
		// TODO: handle exception
		e.printStackTrace();
	}
	return list;
}


	public Integer save(Category c){
//		Database.allTodos.add(todo);
		Integer id=0;
		try {
			
			String query="insert into spring_ng_huseyn_shopping.category(name)"+" values (?)";
			Connection con=source.getConnection();
			PreparedStatement statement=con.prepareStatement(query,Statement.RETURN_GENERATED_KEYS);
			statement.setString(1, c.getName());
			statement.executeUpdate();
			ResultSet res = statement.getGeneratedKeys();
			while(res.next()){
				id= res.getInt(1);
			}
			statement.close();
			con.close();
			res.close();
			
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		
		
		return id;
	}
}
