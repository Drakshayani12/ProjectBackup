package com.example.adg.security;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

import com.example.adg.security.service.ProductService;

@SpringBootApplication
public class SecurityApplication {

	public static void main(String[] args) {
		ApplicationContext applicationContext = SpringApplication.run(SecurityApplication.class, args);
		ProductService productService = applicationContext.getBean(ProductService.class);
		productService.loadProductsFromDB();
		// SpringApplication.run(SecurityApplication.class, args);
	}

}
