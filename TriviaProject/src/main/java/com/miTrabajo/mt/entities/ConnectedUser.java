package com.miTrabajo.mt.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class ConnectedUser {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long connectedUserId;
	
	private String nickname;
	
	public ConnectedUser() {
		
	}
	
	public ConnectedUser(String nickname) {
		this.nickname = nickname;
	}

	public String getNickname() {
		return nickname;
	}

	public void setNickname(String nickname) {
		this.nickname = nickname;
	}

	public long getConnectedUserId() {
		return connectedUserId;
	}

	public void setConnectedUserId(long connectedUserId) {
		this.connectedUserId = connectedUserId;
	}
	
	
	
}

