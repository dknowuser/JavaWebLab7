package edu.etu.web.shared;

import java.io.Serializable;

public class Customer implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	private String name;
	private String price;
	private boolean sale;
	public Customer() {}
	
	public Customer(String _name, String _price, boolean _sale) {
		this.sale = _sale;
		this.price = _price;
		this.name = _name;
	}
	public String getName() {
		return name;
	}
	public String getPrice() {
		return price;
	}
	public boolean isSale() {
		return sale;
	}
		public void setName(String _name) {
		this.name = _name;
	}

}
