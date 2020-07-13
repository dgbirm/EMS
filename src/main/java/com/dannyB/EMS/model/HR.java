/**
 * 
 */
package com.dannyB.EMS.model;

import javax.persistence.Entity;

/**
 * @author Dan Birmingham >> dgbirm@gmail.com
 * Start Date: May 11, 2020
 * Last Updated: 
 * Description:
 *
 */

@Entity
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
