package com.wipro.jdbcdemo;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class InsertEmplyee {
	public static void main(String[] args) {
        // Database URL, username and password
        String jdbcURL = "jdbc:mysql://localhost:3306/wiprojdbc";
        String username = "root";
        String password = "root";

        // SQL Insert query (id will auto-increment)
        String insertQuery = "INSERT INTO employee (emp_name, department) VALUES (?, ?)";

        try {
            // Load JDBC driver (optional for newer versions)
            Class.forName("com.mysql.cj.jdbc.Driver");

            // Establish connection
            Connection connection = DriverManager.getConnection(jdbcURL, username, password);

            // Create PreparedStatement
            PreparedStatement statement = connection.prepareStatement(insertQuery);

            // Set parameters (replace with actual values)
            statement.setString(1, "John Doe");
            statement.setString(2, "IT");

            // Execute insert
            int rowsInserted = statement.executeUpdate();

            // Result feedback
            if (rowsInserted > 0) {
                System.out.println("A new employee was inserted successfully!");
            }

            // Close resources
            statement.close();
            connection.close();
        } catch (SQLException e) {
            System.out.println("Database error:");
            e.printStackTrace();
        } catch (ClassNotFoundException e) {
            System.out.println("MySQL JDBC Driver not found:");
            e.printStackTrace();
        }
    }
}
