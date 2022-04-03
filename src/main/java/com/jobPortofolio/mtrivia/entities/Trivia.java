package com.jobPortofolio.mtrivia.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Trivia {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long triviaId;
	
	private String name;
	private String questions;
	private String commands;
	
	
	
	public Trivia() {
		
	}
	

	public Trivia(String name, String questions, String commands) {
		super();
		this.name = name;
		this.questions = questions;
		this.commands = commands;
	}
	public long getTriviaId() {
		return triviaId;
	}
	public void setTriviaId(long triviaId) {
		this.triviaId = triviaId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getQuestions() {
		return questions;
	}
	public void setQuestions(String questions) {
		this.questions = questions;
	}
	public String getCommands() {
		return commands;
	}
	public void setCommands(String commands) {
		this.commands = commands;
	}
	
	
	
	

}
