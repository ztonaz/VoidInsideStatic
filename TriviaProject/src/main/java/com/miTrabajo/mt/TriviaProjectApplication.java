package com.miTrabajo.mt;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.miTrabajo.mt.TriviaLogics.StaticGameTime;

@SpringBootApplication
public class TriviaProjectApplication {

	public static void main(String[] args) {
		SpringApplication.run(TriviaProjectApplication.class, args);
		
		
		StaticGameTime.sixSeconds();
		
	}
	
	
	

}
