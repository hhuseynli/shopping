package com.Huseyn.shopping.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Huseyn.shopping.dao.OrderDAO;
import com.Huseyn.shopping.model.OrderModel;

@RestController
@RequestMapping(path="/orders")
@CrossOrigin(origins="*")
public class OrderRestController {
	
	@Autowired
	OrderDAO dao;
	
	@PostMapping
	public OrderModel addOrder(@RequestBody OrderModel order){
		return dao.save(order);
	}
	
	@GetMapping(path="/findPartial/{begin}/{username}")
	public List<OrderModel> getOrdersByUsername(@PathVariable(name="begin") Integer begin, @PathVariable(name="username") String username){
		return dao.findByUsername(begin, 12, username);
	}
	

}
