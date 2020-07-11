/**
 * 
 */
package com.dannyB;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.dannyB.repo.DepartmentRepository;
import com.dannyB.repo.EmployeeRepository;

/**
 * @author Dan Birmingham >> dgbirm@gmail.com
 * Start Date: Jul 10, 2020
 * Last Updated: 
 * Description:
 *
 */

@Component
public class DbLoader implements CommandLineRunner {

	private final EmployeeRepository empRepo;
	private final DepartmentRepository depRepo;
	
	@Autowired
	public DbLoader(EmployeeRepository e, DepartmentRepository d) {
		this.empRepo = e;
		this.depRepo = d;
	}
	
	@Override
	public void run(String... args) throws Exception {
		
	}

}
