package com.Huseyn.shopping;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;


import com.Huseyn.shopping.storage.StorageProperties;
import com.Huseyn.shopping.storage.StorageService;

@SpringBootApplication
@EnableConfigurationProperties(StorageProperties.class)
public class ShoppingApplication {

	public static void main(String[] args) {
		SpringApplication.run(ShoppingApplication.class, args);
	}
	
	
	@Bean
	CommandLineRunner init(StorageService service){
		return (args) -> {

    service.init();
};
}


}
