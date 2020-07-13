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
public class Manufacturing extends Department {

	private static final long serialVersionUID = -8190010746911616265L;
	/**
	 * @param depName
	 * @param depHead
	 */
	public Manufacturing(String depName, String depHead) {
		super(depName, depHead);
	}
	/**
	 * @param depName
	 */
	public Manufacturing(String depName) {
		super(depName);
	}
	public Manufacturing() {
		super("Manufacturing");
	}

}
