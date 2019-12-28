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


import com.Huseyn.shopping.model.Product;

@Component
public class ProductDAO {
	
	@Autowired
	private DataSource source;

	public  List<Product> getAll() {
	List<Product>list=new ArrayList<>();
	try {
		String query="SELECT id,name,description,price FROM spring_ng_huseyn_shopping.product;";
		Connection con = source.getConnection();
		PreparedStatement statement = con.prepareStatement(query);
		ResultSet res= statement.executeQuery();
		while(res.next()){
			Product p = new Product();
			p.setId(res.getInt("id"));
			p.setName(res.getString("name"));
			p.setDescription(res.getString("description"));
			p.setPrice(res.getInt("price"));
			list.add(p);
		}
		con.close();
		statement.close();
		res.close();
		
	} catch (Exception e) {
		// TODO: handle exception
	}
	return list;
	
	}

	public Integer save(Product product) {
		Integer id=0;
		try {
			Connection con= source.getConnection();
			PreparedStatement statement = null;
			ResultSet res=null;
			System.out.println(product.getId());
			if(product.getId()>0){
				String query = "UPDATE product set name = ?, description = ?,price= ? where id ="+product.getId();
				statement = con.prepareStatement(query);
				statement.setString(1, product.getName());
				statement.setString(2, product.getDescription());
				statement.setInt(3, product.getPrice());
				statement.executeUpdate();
;		
			}else{
				String query="INSERT into product(name,description,price) values(?,?,?);";			
				
				statement = con.prepareStatement(query, Statement.RETURN_GENERATED_KEYS);
				statement.setString(1, product.getName());
				statement.setString(2, product.getDescription());
				statement.setInt(3, product.getPrice());
				statement.executeUpdate();
				res = statement.getGeneratedKeys();
				while(res.next()){
					id= res.getInt(1);
					
			
			}
			
			con.close();
			statement.close();
			
			if(res!=null){
			res.close();
			}
			
			}
			}catch (Exception e) {
			e.printStackTrace();
		}
		return id;
		
	}

	public void deleteSel(Integer i) {
		try {
				
				String query="DELETE FROM spring_ng_huseyn_shopping.product WHERE id = "+i;
				Connection con= source.getConnection();
				PreparedStatement statement= con.prepareStatement(query);
				statement.executeUpdate();
				statement.close();
				con.close();
		
		} catch (Exception e) {
			e.printStackTrace();
		}
		
	}

}
