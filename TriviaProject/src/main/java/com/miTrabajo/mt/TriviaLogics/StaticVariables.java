package com.miTrabajo.mt.TriviaLogics;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

public class StaticVariables {
	
	//STATIC VARIABLES
	public static boolean activeGame = true;
	
	//static random question and answer
	public static int randomZ;
	
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
		questions.add("Capital of Spain");
		questions.add("Best team in football history");
		questions.add("Who wrote Hamlet?");
		questions.add("Who created Microsoft?");
		questions.add("Creator of this trivia");
		
	}
	
	public static void chargeA() {
		answers.add("mainframe");
		answers.add("domain");
		answers.add("connection");
		answers.add("attached");
		answers.add("troubleshooting");
		answers.add("Madrid");
		answers.add("Real Madrid");
		answers.add("William Shakespeare");
		answers.add("Bill Gates");
		answers.add("ztonaz");
	}
	
	
	
	
	//temporal Winners for question
	public static ArrayList<String> tempWinners = new ArrayList<String>();
	
	//Test in memory database users + xp + trivia points + fast mode points + time points + fastest time + average time + fastest fast mode 
	public static HashMap<String, List<String>> infoUsersDictionary = new HashMap<String, List<String>>();
	//static list of info
	public void listInfoUser(String xp, String tPoints, String fPoints, String timePoints, String fastestTimeTrivia, String fastestTimeFastMode, String averageTimeTrivia) {
		
		
	}
}
