package com.miTrabajo.mt;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.miTrabajo.mt.TriviaLogics.StaticFunctions;
import com.miTrabajo.mt.TriviaLogics.StaticGameTime;
import com.miTrabajo.mt.TriviaLogics.StaticVariables;

@SpringBootApplication
public class VoidInsideStatic {

	public static void main(String[] args) {
		SpringApplication.run(VoidInsideStaticApplication.class, args);
		
		
		//load all questions and answers
		
		StaticFunctions.chargeQandA();
		
		
		
		
		StaticGameTime.sixSeconds();
		
	}
	
	
	

}
