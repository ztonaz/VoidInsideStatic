package com.miTrabajo.mt.TriviaLogics;

import java.util.ArrayList;

public class StaticVariables {
	
	//STATIC VARIABLES
	public static boolean activeGame = true;
	
	
	
	//GROUPS AND LISTS - STATIC
	
	//Q&A
	public static ArrayList<String> questions = new ArrayList<String>();
	public static ArrayList<String> answers = new ArrayList<String>();
	
	public static void chargeQ() {
		questions.add("Waiting for answers from the mainframe");
		questions.add("There no request from outside domain");
		questions.add("Temporary enabeling connection");
		questions.add("No firewall attached");
		questions.add("Stop sending firewall troubleshooting");
		
	}
	
	public static void chargeA() {
		answers.add("mainframe");
		answers.add("domain");
		answers.add("connection");
		answers.add("attached");
		answers.add("troubleshooting");
		
	}
	
	
	
	
	//temporal Winners for question
	public static ArrayList<String> tempWinners = new ArrayList<String>();
	
	


}
