package com.dannyB.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.dannyB.model.Employee;

@RepositoryRestResource
public interface EmployeeRepository extends JpaRepository<Employee, String> {
	
}