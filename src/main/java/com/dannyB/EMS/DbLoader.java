/**
 * 
 */
package com.dannyB.EMS;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.dannyB.EMS.model.Department;
import com.dannyB.EMS.model.Employee;
import com.dannyB.EMS.model.Leadership;
import com.dannyB.EMS.repo.DepartmentRepository;
import com.dannyB.EMS.repo.EmployeeRepository;

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
		Department leadership = new Leadership();
		Employee Rich = new Employee("Rich Bowers", leadership.getDEP_ID(), "Director");
		
		this.depRepo.save(leadership);
		this.empRepo.save(Rich);
	}

}
