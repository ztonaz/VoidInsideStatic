package com.miTrabajo.mt;

import java.util.ArrayList;

public class TriviaLogic {
	
	
	public static void aCommands(String theNick, String theCommand, ArrayList<String> nicksDatabase, ArrayList<String> commandsDatabase, Boolean activeGameMF) {

		String nickNameZS;
		String commandZS;
		String notifyZS;
		
		if (nicksDatabase.contains(theNick)) {
			if (activeGameMF == true) {
				nickNameZS = theNick;
				commandZS = theCommand;
				notifyZS = "Game already started";
				System.out.println(nickNameZS + " " + commandZS + " "+ notifyZS);
			}
			else {
				startGameActivate();
				nickNameZS = theNick;
				commandZS = theCommand;
				notifyZS = nickNameZS + " " + commandZS + " " + "Started the game";
				System.out.println(notifyZS);
				
			}
		}
		
		//return false from workflow
		else {
			System.out.println("return false: user not allowed");
		}
		
	}
	
	
	public static void startGameActivate() {
		System.out.println("You have started the game");
	}
	

	
	

	public static void main(String[] args) {
		
		
		//Server variables
		ArrayList<String> nicks= new ArrayList<String>();
		ArrayList<String> commands= new ArrayList<String>();
		
		nicks.add("ztonaz");nicks.add("ggskill");
		commands.add("!start");commands.add("!stop");
		
		Boolean activeGame = false;
		
		
		
		//command
		String nick = "ztonaz";
		String command = "!start";
		
		
		//game logic
		
		aCommands(nick, command, nicks, commands, activeGame);
		
	
		

	}

}