/**
 * 
 */
package com.dannyB.EMS.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * @author Dan Birmingham >> dgbirm@gmail.com
 * Start Date: Jul 10, 2020
 * Last Updated: 
 * Description:
 *
 */

@Controller
public class EmsController {
	
	@RequestMapping(value = "/") //flag index to support root
	public String index() {
		return "index";
	}
	
}
