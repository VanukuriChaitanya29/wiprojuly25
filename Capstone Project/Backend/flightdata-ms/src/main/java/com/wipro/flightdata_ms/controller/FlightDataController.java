package com.wipro.flightdata_ms.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.wipro.flightdata_ms.model.FlightData;
import com.wipro.flightdata_ms.service.FlightDataService;

@RestController
@RequestMapping("/api/flightsdata")
@CrossOrigin(origins = "*")
public class FlightDataController {

    private final FlightDataService flightDataService;

    public FlightDataController(FlightDataService flightService) {
        this.flightDataService = flightService;
    }

    @GetMapping
    public List<FlightData> getAllFlights() {
        return flightDataService.getAllFlights();
    }

    @GetMapping("/{id}")
    public FlightData getFlightById(@PathVariable Long id) {
        return flightDataService.getFlightById(id);
    }

    @GetMapping("/search")
    public List<FlightData> searchFlights(@RequestParam String source, @RequestParam String destination) {
        return flightDataService.searchFlights(source, destination);
    }

    @PostMapping
    public FlightData addFlight(@RequestBody FlightData flight) {
        return flightDataService.addFlight(flight);
    }
}
