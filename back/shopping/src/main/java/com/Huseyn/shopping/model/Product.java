package com.Huseyn.shopping.model;

import java.io.File;

import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
public class Product {
		private Integer id;
		private String name;
		private String description;
		private File image;
		private Integer price;
		private Category category;
		private String city;
		private String seller;
		private String phone;
		private String email;
		
		
		
		} 


