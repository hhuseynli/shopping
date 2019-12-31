package com.Huseyn.shopping.model;

import java.io.File;

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
		public Integer getId() {
			return id;
		}
		public void setId(Integer id) {
			this.id = id;
		}
		public String getName() {
			return name;
		}
		public void setName(String name) {
			this.name = name;
		}
		public String getDescription() {
			return description;
		}
		public void setDescription(String description) {
			this.description = description;
		}
		public File getImage() {
			return image;
		}
		public void setImage(File image) {
			this.image = image;
		}
		public Integer getPrice() {
			return price;
		}
		public void setPrice(Integer price) {
			this.price = price;
		}
		public Category getCategory() {
			return category;
		}
		public void setCategory(Category category) {
			this.category = category;
		}
		public String getCity() {
			return city;
		}
		public void setCity(String city) {
			this.city = city;
		}
		public String getSeller() {
			return seller;
		}
		public void setSeller(String sellerName) {
			this.seller = sellerName;
		}
		public String getPhone() {
			return phone;
		}
		public void setPhone(String phone) {
			this.phone = phone;
		}
		public String getEmail() {
			return email;
		}
		public void setEmail(String email) {
			this.email = email;
		}
		
		
		} 


