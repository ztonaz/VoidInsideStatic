package com.miTrabajo.mt.dao;

import org.springframework.data.repository.CrudRepository;

import com.miTrabajo.mt.entities.ConnectedUser;

public interface ConnectedUsersRepository extends CrudRepository<ConnectedUser,Long> {

	void save(com.miTrabajo.mt.controllers.ConnectedUser theUser);

}
