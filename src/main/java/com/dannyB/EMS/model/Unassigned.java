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
public final class Unassigned extends Department {

	private static final long serialVersionUID = 3380795860170929845L;

	public Unassigned() {
		super("Unassigned");
	}

}
