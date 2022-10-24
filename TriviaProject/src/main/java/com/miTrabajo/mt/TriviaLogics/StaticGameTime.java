package com.miTrabajo.mt.TriviaLogics;

import java.util.Timer;
import java.util.TimerTask;

public class StaticGameTime {
	


	
@SuppressWarnings("deprecation")
public static void sixSeconds() {
	
	if (StaticVariables.activeGame==true) {
		new Timer().schedule(new TimerTask() {

			@Override
			public void run() {
				// TODO Auto-generated method stub
				System.out.println("Capital of Spain");	
				
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
				System.out.println("Times up. The answer was Madrid. The winners are: ");
				
				EndGame();
				
			}
			
		}, 10000);  
		    
	}
	
		
		
	}	
@SuppressWarnings("deprecation")
public static void EndGame() {
	if (StaticVariables.activeGame==true) {
		new Timer().schedule(new TimerTask() {

			@Override
			public void run() {
				// TODO Auto-generated method stub
				
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
				
				System.out.println("Next question in 6 seconds");
				sixSeconds();

				
			}
			
		}, 2000);
	}
	
	
	
}
	
	
	
	

	
	
	
}
