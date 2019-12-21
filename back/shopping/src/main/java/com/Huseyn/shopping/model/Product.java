package com.Huseyn.shopping.model;

import java.io.File;

public class Product {
		private Integer id;
		private String name;
		private String description;
		private File image;
		private Integer price;
		
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
		public File getFile() {
			return image;
		}
		public void setFile(File File) {
			this.image = File;
		}
		public Integer getPrice() {
			return price;
		}
		public void setPrice(Integer price) {
			this.price = price;
		}
		public Integer getId() {
			return id;
		}
		public void setId(Integer id) {
			this.id = id;
		}
		
		} 


