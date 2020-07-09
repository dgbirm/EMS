/**
 * 
 */
package com.dannyB.model;

import java.io.Serializable;

/**
 * @author Dan Birmingham >> dgbirm@gmail.com
 * Start Date: May 8, 2020
 * Last Updated: 
 * Description: Class to store  and manage information about an employee in the EMS
 *
 */
public class Employee implements Serializable{
	
	private static final long serialVersionUID = 4498346644792345109L;
	//Employee parameters
	private String fullName;
	private String EMP_ID; //would make this final if didnt cause issues with building later
	private Department dep;
	private double yearlySalary;
	private String jobTitle;  //do I want to make title ENUMS at some point?
	
	/**
	 * @param fullName: full name of this employee
	 * @param dep: department this employee is in. Unassigned if not specified
	 * @param yearlySalary annual salary of this employee. 0.0 if specified
	 * @param jobTitle specific job title for this employee. "Not yet assigned" if not specified
	 */
	public Employee(String fullName, Department dep, String jobTitle, double yearlySalary) {
		buildEmp(fullName,dep,jobTitle,yearlySalary);
	}
	
	public Employee(String fullName, Department dep, String jobTitle) {
		buildEmp(fullName,dep,jobTitle,0.0);
	}
	
	public Employee(String fullName, Department dep) {
		buildEmp(fullName,dep,"Not Yet Assigned",0.0);
	}
	
	public Employee(String fullName) {
		buildEmp(fullName, EMS.getDepartmentMap().get("UNASSIGNED"),"Not Yet Assigned",0.0);
	}
	
	//TODO: sanitize name and Dep input
	private void buildEmp(String fullName, Department dep, String jobTitle, double yearlySalary) {
		this.fullName = fullName;
		this.dep = dep;
		this.jobTitle = jobTitle;
		this.yearlySalary = yearlySalary;
		this.EMP_ID = genEmployeeID(this.fullName);
		addEmployeeToEMSMap();
		addEmployeeToDepSet();
	}
	
	private String genEmployeeID(String fullName) {
		StringBuilder newID = new StringBuilder();
		String[] fns = fullName.split(" ");
		if (fns.length <= 2) {
			newID.append(fns[0].charAt(0)).append(fns[fns.length-1].charAt(0));
		}
		else {
			newID.append(fns[0].charAt(0)).append(fns[1].charAt(0)).append(fns[fns.length-1].charAt(0));
		}
		
		for (int i = 0; i < newID.length(); i++) {
			   char c = newID.charAt(i);
			   newID.setCharAt(i, Character.toLowerCase(c));
			}
		int count = 1;
		newID.append(count);
		while(EMS.getEmployeeMap().containsKey(newID.toString())){
			count++;
			newID = newID.deleteCharAt(newID.length()-1).append(count);
		}
		return newID.toString();
	}
	
	private void addEmployeeToEMSMap() {
		EMS.addEmployee(this.EMP_ID, this);
	}
	
	private void addEmployeeToDepSet() {
		this.dep.addToEmpIdSet(this.EMP_ID);
	}
	
	
	
	@Override
	public String toString() {
		return "Employee [fullName=" + fullName + ", EMP_ID=" + EMP_ID + ", dep=" + dep + ", jobTitle=" + jobTitle
				+ "]";
	}

	//Getters and Setters
	public String getFullName() {
		return fullName;
	}

	public Department getDep() {
		return dep;
	}

	public void setDep(Department dep) {
		this.dep = dep;
	}

	public double getYearlySalary() { // should this be something other than public?
		return yearlySalary;
	}

	public void setYearlySalary(double yearlySalary) {
		this.yearlySalary = yearlySalary;
	}

	public String getJobTitle() {
		return jobTitle;
	}

	public void setJobTitle(String title) {
		this.jobTitle = title;
	}

	public String getEmpID() {
		return EMP_ID;
	}
	
	
}
