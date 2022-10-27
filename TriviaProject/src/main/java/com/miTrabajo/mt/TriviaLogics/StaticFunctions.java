package com.miTrabajo.mt.TriviaLogics;

import java.util.Random;

public class StaticFunctions {
	
	
	//load all questions and answers
	public static void chargeQandA() {
		StaticVariables.chargeQ();
		StaticVariables.chargeA();
	}
	
	//delete questions and answers from memory
	public static void emptyQandA() {
		StaticVariables.questions.clear();
		StaticVariables.answers.clear();
	}
	
	//get a random question and answer from memory
	public static void getRandomQandA() {
		
		int qSize = StaticVariables.questions.size()-1;
		Random rand = new Random();
		StaticVariables.randomZ = rand.nextInt((qSize - 0) +1)+0;
		
	}
	
	//See which question is
	public static void activeQuestion() {
		System.out.println(StaticVariables.questions.get(StaticVariables.randomZ));
	}
	
	//See which answer is
	public static void activeAnswer() {
		System.out.println(StaticVariables.answers.get(StaticVariables.randomZ));
	}
	
	
	//cancel all timers when the game is stopped
	public static void cancelGame() {
		StaticVariables.activeGame = false;
	}
	
	//activate game
	public static void startGame() {
		StaticVariables.activeGame = true;	
	}

	//add info about users - dictionary 
	public static void usersInfoDictionary() {
		StaticVariables.infoUsersDictionary.put("ztonaz", null);
	}

	

}
