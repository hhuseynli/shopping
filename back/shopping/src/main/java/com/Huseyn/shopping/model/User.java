package com.Huseyn.shopping.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name="users")
public class User {
	@Id
private String username;
private String password;
private Byte enabled;
private String full_Name;
}
