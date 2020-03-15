package com.Huseyn.shopping.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.Huseyn.shopping.model.Product;

public interface ProductsDAO extends JpaRepository<Product, Integer> {
	@Query(value="select * from product limit ?1,?2", nativeQuery=true)
	public List<Product> findRange(Integer begin, Integer length);
	
	@Query(value="select * from product where username=?1 limit ?2,?3", nativeQuery=true)
	public List<Product> findRangeByUsername(String username, Integer begin, Integer length);
	
	@Query(value="select * from product where username not like ?1 limit ?2,?3 ", nativeQuery=true)
	public List<Product> findSearchInRange(String search, Integer begin, Integer length );

}
