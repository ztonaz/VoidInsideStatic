package com.miTrabajo.mt.controllers;




public class TriviaBotZ {
	
	private String triviaName;
	private String triviaMessage;
	private String theTime;
	private String endTime;
	private String actualTime;
	private String connectedUsers;
	private int extra;
	
	
	public TriviaBotZ() {
		
	}
	
	
	
	
	
	public TriviaBotZ(String triviaName, String triviaMessage, String theTime, String endTime) {
		super();
		this.triviaName = triviaName;
		this.triviaMessage = triviaMessage;
		this.theTime = theTime;
		this.endTime = endTime;
	}
	
	
	public TriviaBotZ(String triviName, String actualTime) {
		super();
		this.triviaName = triviName;
		this.actualTime = actualTime;
	}
	
	
	public void onDisconnect(String triviaName) {
		this.triviaName = triviaName;
	}
	
	
public TriviaBotZ (String triviaName, String connectedUsers, int extra) {
		
		this.triviaName = triviaName;
		this.connectedUsers = connectedUsers;
		this.extra = extra;
	}
	
	
	
	public TriviaBotZ(String triviName) {
		super();
		this.triviaName = triviName;
	}
	
	
	public String getTriviaName() {
		return triviaName;
	}
	public void setTriviaName(String triviaName) {
		this.triviaName = triviaName;
	}
	public String getTriviaMessage() {
		return triviaMessage;
	}
	public void setTriviaMessage(String triviaMessage) {
		this.triviaMessage = triviaMessage;
	}


	public String getTheTime() {
		return theTime;
	}


	public void setTheTime(String theTime) {
		this.theTime = theTime;
	}


	public String getEndTime() {
		return endTime;
	}


	public void setEndTime(String endTime) {
		this.endTime = endTime;
	}


	public String getActualTime() {
		return actualTime;
	}


	public void setActualTime(String actualTime) {
		this.actualTime = actualTime;
	}





	public String getConnectedUsers() {
		return connectedUsers;
	}





	public void setConnectedUsers(String connectedUsers) {
		this.connectedUsers = connectedUsers;
	}





	public int getExtra() {
		return extra;
	}





	public void setExtra(int extra) {
		this.extra = extra;
	}


	






	
	
	
	
	

}
