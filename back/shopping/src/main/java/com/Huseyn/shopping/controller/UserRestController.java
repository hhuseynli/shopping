package com.Huseyn.shopping.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Huseyn.shopping.dao.UserDAO;
import com.Huseyn.shopping.model.User;

@RestController
@RequestMapping(path="/users")
@CrossOrigin(origins={"http://localhost:4200"})
public class UserRestController {
	
	@Autowired
	UserDAO userDao;
	
	
	
	@GetMapping
	public List<User> getUsers(){
		return userDao.findAll();
		
	}
	@PostMapping
	public User addUser(@RequestBody User user){
		user.setPassword("{noop}"+user.getPassword());
		return userDao.save(user);
	}
	@PutMapping(path="/update")
	public User updateUser(@RequestBody User user){
		return userDao.save(user);
	}
	@DeleteMapping(path="/delete/{user}")
	public void deleteUser(@PathVariable String user){
		userDao.deleteById(user);
	}
	
	
	

}