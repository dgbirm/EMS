/**
 * 
 */
package com.dannyB.model;

/**
 * @author Dan Birmingham >> dgbirm@gmail.com
 * Start Date: May 11, 2020
 * Last Updated: 
 * Description:
 *
 */
public class HR extends Department {

	private static final long serialVersionUID = 1357053302422961823L;
	/**
	 * @param depName
	 * @param depHead
	 */
	public HR(String depName, String depHead) {
		super(depName, depHead);
	}
	/**
	 * @param depName
	 */
	public HR(String depName) {
		super(depName);
	}
	public HR() {
		super("Human Resources");
	}

}
