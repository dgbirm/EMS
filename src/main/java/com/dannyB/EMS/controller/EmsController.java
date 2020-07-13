/**
 * 
 */
package com.dannyB.EMS.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author Dan Birmingham >> dgbirm@gmail.com
 * Start Date: Jul 10, 2020
 * Last Updated: 
 * Description:
 *
 */

@RestController
public class EmsController {
	
	@RequestMapping("/") //flag index to support root
	public String index() {
		return "index";
	}
	
	
	
}
