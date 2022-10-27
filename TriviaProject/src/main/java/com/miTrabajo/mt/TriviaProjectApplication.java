package com.miTrabajo.mt;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.miTrabajo.mt.TriviaLogics.StaticFunctions;
import com.miTrabajo.mt.TriviaLogics.StaticGameTime;
import com.miTrabajo.mt.TriviaLogics.StaticVariables;

@SpringBootApplication
public class TriviaProjectApplication {

	public static void main(String[] args) {
		SpringApplication.run(TriviaProjectApplication.class, args);
		
		
		//load all questions and answers
		
		StaticFunctions.chargeQandA();
		
		
		
		
		StaticGameTime.sixSeconds();
		
	}
	
	
	

}
