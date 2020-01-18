package com.Huseyn.shopping.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.Huseyn.shopping.model.User;

@Component
public class UserAuthDAO {

	@Autowired
	DataSource source; 
	
	public void addAuthority(String user){
		String query="insert into spring_ng_huseyn_shopping.authorities (username,authority) values(?,?)";
		try {
			Connection con = source.getConnection();
			PreparedStatement statement = con.prepareStatement(query);
			statement.setString(1, user);
			statement.setString(2, "ROLE_ADMIN");
			statement.executeUpdate();
		} catch (Exception e) {
			e.printStackTrace();		
			}
		}
}
