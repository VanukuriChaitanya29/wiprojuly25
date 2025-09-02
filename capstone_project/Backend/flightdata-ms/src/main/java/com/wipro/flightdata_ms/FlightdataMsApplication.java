package com.wipro.flightdata_ms;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;

@OpenAPIDefinition(
    info = @Info(
        title = "Flight Data Service API",
        version = "1.0",
        description = "Handles all operations related to flights"
    )
)

@SpringBootApplication
public class FlightdataMsApplication {

	public static void main(String[] args) {
		SpringApplication.run(FlightdataMsApplication.class, args);
	}

}
