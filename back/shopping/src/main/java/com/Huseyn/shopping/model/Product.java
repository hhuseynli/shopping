package com.Huseyn.shopping.model;



import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.annotations.ForeignKey;

import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name="product")
@Getter
@Setter
public class Product {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
		private Integer id;
		private String name;
		private String description;
		private String image;
		private Integer price;
		@ManyToOne
		@JoinColumn(name="category_id")
		private Category category;
		private String username;
		
		
		} 


