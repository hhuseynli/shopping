package com.Huseyn.shopping.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Huseyn.shopping.model.OrderModel;

public interface OrderDAO extends JpaRepository<OrderModel, Integer> {

}
