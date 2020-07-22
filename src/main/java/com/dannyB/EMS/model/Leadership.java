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
public class Leadership extends Department {

	private static final long serialVersionUID = 1474997418003913406L;
	/**
	 * @param depName
	 * @param depHead
	 */
	public Leadership(String depName, String depHead) {
		super(depName, depHead);
	}
	/**
	 * @param depName
	 */
	public Leadership(String depName) {
		super(depName);
	}
	public Leadership() {
		super("Leadership");
	}

}
