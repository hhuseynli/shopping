package com.Huseyn.shopping.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Huseyn.shopping.model.User;

public interface UserDAO extends JpaRepository<User, String>{

}
