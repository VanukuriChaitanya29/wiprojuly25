package com.wipro.hiberdemo;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

import entity.PAN;

public class PanTest {

	    public static void main(String[] args) {
	        // Load Hibernate configuration
	        SessionFactory factory = new Configuration()
	                                    .configure("hibernate.cfg.xml")
	                                    .addAnnotatedClass(PAN.class)
	                                    .buildSessionFactory();

	        // Open session
	        Session session = factory.getCurrentSession();

	        try {
	            // Create new PAN record
	            PAN pan = new PAN("Chiatanya", "ABCD12345F");
	            pan.setPanholderName(pan);
	            pan.setPanNumber(pan);

	            // Begin transaction
	            session.beginTransaction();

	     

	            // Commit transaction
	   
	            session.getTransaction().commit();

	            System.out.println("Record saved successfully!");

	        } finally {
	            factory.close();
	        }
	    }
	}


