package com.miTrabajo.mt.TriviaLogics;

import java.util.Collections;
import java.util.Timer;
import java.util.TimerTask;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessageHeaderAccessor;
import org.springframework.messaging.simp.SimpMessageSendingOperations;
import org.springframework.web.util.HtmlUtils;

import com.miTrabajo.mt.controllers.TriviaBotZ;

public class StaticGameTime {
	
	 

	
@SuppressWarnings("deprecation")
public static void sixSeconds() {
	
	if (StaticVariables.activeGame==true) {
		new Timer().schedule(new TimerTask() {

			@Override
			public void run() {
				// TODO Auto-generated method stub
				//System.out.println("Capital of Spain");
				StaticFunctions.activeQuestion();
				
				ActiveGame();
				
			}
			
		}, 6000);
	}
		
		
		
	}	
@SuppressWarnings("deprecation")
public static void ActiveGame() {
	if (StaticVariables.activeGame==true) {
		  
		new Timer().schedule(new TimerTask() {

			@Override
			public void run() {
				// TODO Auto-generated method stub
				System.out.println("Times up. The answer was " + StaticVariables.answers.get(StaticVariables.randomZ)  + ". Recalculating scores ");
				
				EndGame();
				
			}
			
		}, 10000);  
		    
	}
	
		
		
	}	
@Autowired
public SimpMessageSendingOperations messagingTemplate;

@SuppressWarnings("deprecation")
public static void EndGame() {
	if (StaticVariables.activeGame==true) {
		new Timer().schedule(new TimerTask() {

			@Override
			public void run() {
				// TODO Auto-generated method stub
				System.out.println("The winners are Test1 and Test2");
				
				Prepare();
			}
			
		}, 5000);
		    
	}
	
	
}	

@SuppressWarnings("deprecation")
public static void Prepare() {
	if (StaticVariables.activeGame==true) {
		 
		new Timer().schedule(new TimerTask() {
			
			@Override
			public void run() {
				// TODO Auto-generated method stub
				StaticFunctions.getRandomQandA();
				System.out.println("Next question in 6 seconds");
				sixSeconds();

				
			}
			
		}, 2000);
	}
	
	
	
}
	
	
	
	

	
	
	
}
