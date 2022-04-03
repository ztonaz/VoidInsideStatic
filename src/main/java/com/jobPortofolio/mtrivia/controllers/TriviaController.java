package com.jobPortofolio.mtrivia.controllers;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import com.jobPortofolio.mtrivia.dao.TriviaRepository;

@Controller
public class TriviaController {
	
	@Autowired
	TriviaRepository triviaRepo;
	
	@GetMapping("/")
	public String showHomePage(Model model) {
	
		
		return "/home";
		
	}
	

}
