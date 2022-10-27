package com.miTrabajo.mt.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.miTrabajo.mt.dao.ConnectedUsersRepository;

@Controller
@RequestMapping("/connectedUsers")
public class ConnectedUsersController {

	@Autowired
	ConnectedUsersRepository connectedRep;
	
	@GetMapping("/newUserConnected")
	public String displayConnectedUsers(Model model) {
		ConnectedUser aUser = new ConnectedUser();
		model.addAttribute("connectedUser", aUser);
		
		return "new-connectedUser";
	
	}
		
	@PostMapping("/saveUserConnected")
	public String saveUserConnected (ConnectedUser theUser, Model model) {
		connectedRep.save(theUser);
		
		return "redirect:/connectedUsers/newUserConnected";
	}
	
}
