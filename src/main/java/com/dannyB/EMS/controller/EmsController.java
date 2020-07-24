/**
 * 
 */
package com.dannyB.EMS.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dannyB.EMS.model.Employee;
import com.dannyB.EMS.repo.DepartmentRepository;
import com.dannyB.EMS.repo.EmployeeRepository;

/**
 * @author Dan Birmingham >> dgbirm@gmail.com
 * Start Date: Jul 10, 2020
 * Last Updated: 
 * Description:
 *
 */

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class EmsController {
	
	@Autowired
	private EmployeeRepository empRepo;
	
	@Autowired
	private DepartmentRepository depRepo;
	
	@RequestMapping(value = "/") //flag index to support root
	public String index() {
		return "index";
	}
	
	@GetMapping("/api/employees")
	public Iterable<Employee> getUsers() {
        return empRepo.findAll();
    }
	
}
