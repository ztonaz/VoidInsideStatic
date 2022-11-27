package com.miTrabajo.mt.controllers.sockets;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessageSendingOperations;
import org.springframework.stereotype.Controller;
import org.springframework.web.util.HtmlUtils;

import com.miTrabajo.mt.controllers.TriviaBotZ;
import com.miTrabajo.mt.dao.TriviaRepository;

@Controller
public class ReceiveChat {
	
	@Autowired
    public SimpMessageSendingOperations messagingTemplate;
	  
	@Autowired
	TriviaRepository triviaRepo;

	@MessageMapping ("/receive")
	public TriviaBotZ trivia(TriviaBotZ triviaName, TriviaBotZ triviaMessage) {
		System.out.println("222222222: " + triviaName.getTriviaName() + " : " + triviaMessage.getTriviaMessage());
		return new TriviaBotZ(HtmlUtils.htmlEscape(triviaName.getTriviaName()), HtmlUtils.htmlEscape(triviaMessage.getTriviaMessage()));
	}
	
	
}
