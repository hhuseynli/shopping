package com.Huseyn.shopping.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.Huseyn.shopping.model.OrderModel;

public interface OrderDAO extends JpaRepository<OrderModel, Integer> {
	
	@Query(value="select * from orders where username=?3 order by id DESC limit ?1,?2 ", nativeQuery=true)
	public List<OrderModel> findByUsername(Integer begin, Integer length, String username);

}
